import { article } from "../content/siteContent";

export function OpeningView() {
  return (
    <section className="opening-view" id="top">
      <div className="content-grid">
        <div className="opening-copy">
          <h1>{article.title}</h1>
          <p className="lead">
            This study explores how large-scale transitions to timber cities may
            affect global freshwater resources. We combine spatially explicit
            forest transitions, climate projections and water-yield data to
            quantify future changes in freshwater availability across
            alternative timber adoption scenarios. Explore our{" "}
            <a href="#visualisation">interactive visualisations</a> and{" "}
            <a href="#animations">global land use change analysis</a>!
          </p>
          <p className="authors">{article.authors}</p>
        </div>
      </div>
    </section>
  );
}
