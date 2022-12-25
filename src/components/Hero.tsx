export const Hero: React.FC = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("./images/underwater.jpg")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold font-heading">
            We Need Each<span className="text-primary">otter</span>.
          </h1>
          <p className="mb-5 font-body">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};
