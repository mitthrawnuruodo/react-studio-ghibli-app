const About = () => (
  <div className="p-4 max-w-prose">
    <h1 className="text-3xl">About Studio Ghibli</h1>
    <p>
      Studio Ghibli is a renowned Japanese animation film studio known for its
      beautiful storytelling and art. The studio's history and films have left an
      indelible mark on the world of animation.
    </p>
    <h2 className="text-2xl">Ghibli API</h2>
    <p>
      Visit the official{' '}
      <a href="https://ghibli-api.vercel.app/" className="text-blue-500">
        Ghibli API
      </a>{' '}
      (or their&nbsp;
      <a href="https://github.com/mazipan/ghibli-api?tab=readme-ov-file" className="text-blue-500">
        GitHub repo
      </a>
      ) for more info.
    </p>
  </div>
);

export default About;
