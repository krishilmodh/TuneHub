import { getURL } from "@/libs/helpers";
import { stripe } from "@/libs/stripe";
import { cookies } from "next/headers";
import { createOrRetrieveCustomer } from "@/libs/supabaseAdmin";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { price, quantity = 1, metadata = {} } = await request.json();

  try {
    const supabase = createRouteHandlerClient({
      cookies,
    });
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) throw Error("could not get user");
    const customer = await createOrRetrieveCustomer({
      uuid: user.id || "",
      email: user.email || "",
    });

    if (!customer) throw Error("Could not get customer");
    const { url } = await stripe.billingPortal.sessions.create({
      customer,
      return_url: `${getURL()}/account`,
    });
    return NextResponse.json({ url });
  } catch (err: any) {
    console.log(err);
    new NextResponse("Internal Error", { status: 500 });
  }
}
