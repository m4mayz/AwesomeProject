export type Music = {
  id: string;
  title: string;
  artist: string;
  year: number;
};
export async function getMusicList(): Promise<Music[]> {
  const res = await fetch(
    `https://68fafef094ec960660243e4d.mockapi.io/api/music`,
  );
  if (!res.ok) throw new Error('Failed to fetch music list');
  return res.json();
}
export async function getMusicById(id: string): Promise<Music> {
  const res = await fetch(
    `https://68fafef094ec960660243e4d.mockapi.io/api/music/${id}`,
  );
  if (!res.ok) throw new Error('Failed to fetch music');
  return res.json();
}
