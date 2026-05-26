export async function GET() {
  return Response.json({
    success: true,
    service: "vercel-coze-proxy",
    message: "Vercel Function is reachable",
    time: new Date().toISOString()
  });
}
