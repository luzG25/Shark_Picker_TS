class SharksType {
  id: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  lat: number;
  lon: number;

  constructor(
    id: string,
    title: string,
    image: { src: string; alt: string },
    lat: number,
    lon: number
  ) {
    this.id = id;
    this.title = title;
    (this.image = image), (this.lat = lat), (this.lon = lon);
  }
}

export default SharksType;
