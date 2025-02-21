const About = () => (
  <div className="p-4">
    <h1>About Studio Ghibli</h1>
    <p>
      Studio Ghibli is a renowned Japanese animation film studio known for its
      beautiful storytelling and art. The studio's history and films have left an
      indelible mark on the world of animation.
    </p>
    <p>
      Visit the official{' '}
      <a href="https://ghibli-api.vercel.app/api/films" className="text-blue-500">
        Ghibli API
      </a>{' '}
      (by the makers at&nbsp;
      <a href="https://github.com/mazipan/ghibli-api?tab=readme-ov-file" className="text-blue-500">
        GitHub
      </a>
      ) for more info.
    </p>
  </div>
);

export default About;
