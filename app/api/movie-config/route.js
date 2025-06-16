export async function GET() {
  return Response.json({
    apiKey: process.env.MOVIE_APP_TMDB_API_KEY || ''
  });
} 