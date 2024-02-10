import Accordion from "./components/Accordion/Accordion";

function App() {
  return <main>
    <section>
      <h2>Why work with us</h2>
      <Accordion className='accordion'>
        <Accordion.Item className="accordion-item">
          <Accordion.Title className='accordion-item-title' id="experience">
            We got 20 years of experience
          </Accordion.Title>
          <Accordion.Content id="experience" className='accordion-item-content'>
            <article>
              <p>Cant go wrong with us</p>
              <p>We plan the best holiday trips</p>
            </article>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item className="accordion-item">
          <Accordion.Title className='accordion-item-title' id="local-guides">
            We work with local guides
          </Accordion.Title>
          <Accordion.Content id="local-guides" className='accordion-item-content'>
            <article>
              <p>We work with the best of the best</p>
              <p>We work with locals</p>
            </article>
            </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </section>
  </main>;
}

export default App;
