
function handler(req: Request) {
    console.log('req', req);
  return new Response(
    JSON.stringify({
      cool: "jos",
    })
  );
}

Deno.serve(handler);
