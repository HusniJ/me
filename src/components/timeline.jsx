import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Senior Consultant at Virtusa <span>2012-present</span></h2>
                        <p>Provide high quality software products based on React JS, Angular and
                          .Net for various clients in industries like Insurance, Construction,
                          Manufacturing, Energy and Banking And Finance. Responsible of
                          analyzing the initial requirement, design and providing best solutions
                          with modern concepts to the clients. Attending to client requests,
                          providing end to end live support and resolving issues in the live
                          system in a rapid manner.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Graduate at Staffordshire Unversity, UK <span>2009-2012</span></h2>
                        <p>I have obtained my Bsc(Hons) in Computing Specialized in Software Engineering. I have learned priniples like Data Structure Manipulation, OOPs, Computer Networks, ICT, Web-Data Management over the years and have better understanding of these subjects</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Primary and Higher Education <span>1994-2007</span></h2>
                        <p>I have completed my higher secondary education with major subjects as Physics,Chemistry & Combined Maths At Saint Aloysius College, Galle, Sri Lanka. During my time at school, I have developed interest in solving complex problems of the fundamental physics which helped me to improve my understanding of any problem and also my mathematical skills to actually solve the problems.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
