export type Music = {
  _id: string;
  name: string;
  artist?: string;
  uId?: string;
  uNm?: string;
  eId?: string;
  pl?: {
    id: number;
    name: string;
  } | null;
  img?: string;
  trackUrl?: string;
  score?: number;
  text?: string;
  nbP?: number;
  nbR?: number;
  lov?: string[];
  comments?: any[];
  reposts?: any[];
};

type MusicResponse = {
  hasMore?: {
    skip: number;
  };
  tracks: Music[];
};

export async function getMusicList(): Promise<Music[]> {
  const res = await fetch(`https://openwhyd.org/hot/electro?format=json`);
  if (!res.ok) throw new Error('Failed to fetch music list');
  const data: MusicResponse = await res.json();
  return data.tracks || [];
}

export async function getMusicById(_id: string): Promise<Music> {
  const res = await fetch(`https://openwhyd.org/c/${_id}?format=json`);
  if (!res.ok) throw new Error('Failed to fetch music detail');
  const response = await res.json();
  // API returns { data: { ...musicData } }
  return response.data || response;
}
