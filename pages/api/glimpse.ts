import type { NextRequest } from 'next/server';
// import glimpse from '@beskar-labs/glimpse/server';

const headers = {
  'content-type': 'application/json',
};

export const config = {
  runtime: 'experimental-edge',
};

const handler = async (req: NextRequest): Promise<Response> => {
  const { url } = (await req.json()) as { url?: string };

  if (!url) {
    return new Response(JSON.stringify({}), { status: 400, headers });
  }

  try {
    const data = await glimpse(url);
    console.log("data", data)

    return new Response(JSON.stringify(data), { status: 200, headers });
  } catch (e) {
    return new Response(JSON.stringify({}), { status: 500, headers });
  }
};

export default handler;
