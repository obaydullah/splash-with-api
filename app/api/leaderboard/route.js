import { getLeaderboard } from "@/actions/get-leaderboard";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/**
 *
 * @param {import("next").NextApiRequest} request
 * @param {import("next").NextApiResponse} response
 */
export const POST = async (request) => {
  try {
    const body = await request.json();

    // console.log(body);

    const data = await getLeaderboard(body.month, body.year);

    return NextResponse.json({
      message: "Success",
      data,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Something went wrong!",
      },
      { status: 500 }
    );
  }
};
