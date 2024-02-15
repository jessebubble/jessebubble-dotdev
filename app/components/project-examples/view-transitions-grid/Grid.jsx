import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { Button } from '~/components/Button';
import { Border } from '~/components/Border';
import { useRef } from 'react';

export function ViewTransitionsGrid() {
    const gridRef = useRef(null);

    function addBox() {
        if (gridRef.current.children.length >= 12) return;

        const box = document.createElement('div');
        box.classList.add('box');
        box.style = `view-transition-name: b${gridRef.current.children.length}`;

        document.startViewTransition
            ? document.startViewTransition(() =>
                  gridRef.current.appendChild(box)
              )
            : gridRef.current.appendChild(box);
    }

    function removeBox() {
        if (gridRef.current.children.length <= 1) return;

        const box = gridRef.current.querySelector(':scope > :last-child');

        document.startViewTransition
            ? document.startViewTransition(() =>
                  gridRef.current.removeChild(box)
              )
            : gridRef.current.removeChild(box);
    }

    return (
        <Container className="">
            <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
                <FadeIn>
                    <article>
                        <Border className="grid gap-x-8 gap-y-8 pt-16">
                            <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                                <p className="font-display text-4xl font-medium text-neutral-950">
                                    Variables and Keyframe Animations
                                </p>
                                <div className="mt-6 space-y-6 text-base text-neutral-600">
                                    <p>
                                        This is a fun little project that I made
                                        to experiment with CSS variables and
                                        keyframe animations. The colors are
                                        defined in the CSS using the LCH color
                                        space, and the position of the gradients
                                        are controlled by the range input. The
                                        gradients are animated using keyframes
                                        to create a swirling effect
                                    </p>
                                </div>
                                <div className="mt-8 flex flex-col">
                                    <div className="container">
                                        <main
                                            className="always-great-grid"
                                            id="grid"
                                            ref={gridRef}
                                        >
                                            <div
                                                className="box"
                                                style={{
                                                    'view-transition-name':
                                                        'b0',
                                                }}
                                            ></div>
                                            <div
                                                className="box"
                                                style={{
                                                    'view-transition-name':
                                                        'b1',
                                                }}
                                            ></div>
                                            <div
                                                className="box"
                                                style={{
                                                    'view-transition-name':
                                                        'b2',
                                                }}
                                            ></div>
                                            <div
                                                className="box"
                                                style={{
                                                    'view-transition-name':
                                                        'b3',
                                                }}
                                            ></div>
                                            <div
                                                className="box"
                                                style={{
                                                    'view-transition-name':
                                                        'b4',
                                                }}
                                            ></div>
                                            {/* 
                                          view transition names are inline so 
                                          they stay attached to the element, 
                                          as opposed to using :nth-child() 
                                          which means each elements name shifts 
                                          when a box is added/removed 
                                      */}
                                        </main>
                                    </div>

                                    <footer>
                                        <Button
                                            className="mt-6"
                                            invert={false}
                                            onClick={removeBox}
                                            type="reset"
                                        >
                                            Remove a box
                                        </Button>
                                        <Button
                                            className="mt-6"
                                            invert={false}
                                            onClick={addBox}
                                        >
                                            Add a box
                                        </Button>
                                    </footer>

                                    <style>
                                        {`
                                  @import "https://unpkg.com/open-props" layer(design.system);
                                  @import "https://unpkg.com/open-props/normalize.min.css" layer(demo.support);
                                  @import "https://unpkg.com/open-props/buttons.min.css" layer(demo.support);
                                  
                                  @layer demo {
                                  .container {
                                      /* VERY IMPORTANT this is "size" and not "inline-size" */
                                      /* it unlocks container aspect ratio queries */
                                      container: perfect-bento / size;
                                    }
                                    
                                  .always-great-grid {
                                      /* these are all the quantity queries */
                                      /* how the grid knows the # of boxes */
                                      /* some target the grid itself */
                                      /* some target the :first-child */
                                      
                                      &:has(> :last-child:nth-child(3)) > :first-child {
                                        grid-column: span 2;
                                      }
                                      
                                      &:has(> :last-child:nth-child(4)) {
                                        grid-template-columns: repeat(2, 1fr);
                                      }
                                      
                                      &:has(> :last-child:nth-child(5)) > :first-child {
                                        grid-column: span 2;
                                      }
                                      
                                      &:has(> :last-child:nth-child(6)) {
                                        grid-template-columns: repeat(2, 1fr);
                                      }
                                      
                                      &:has(> :last-child:nth-child(7)) > :first-child {
                                        grid-column: span 2;
                                        grid-row: span 2;
                                      }
                                      
                                      &:has(> :last-child:nth-child(8)) {
                                        grid-template-columns: repeat(2, 1fr);
                                      }
                                      
                                      &:has(> :last-child:nth-child(9)) {
                                        grid-template-columns: repeat(3, 1fr);
                                      }
                                      
                                      &:has(> :last-child:nth-child(10)) {
                                        grid-template-columns: repeat(2, 1fr);
                                      }
                                      
                                      &:has(> :last-child:nth-child(11)) > :first-child {
                                        grid-column: span 2;
                                        grid-row: span 2;
                                      }
                                      
                                      &:has(> :last-child:nth-child(12)) {
                                        grid-template-columns: repeat(4, 1fr);
                                      }
                                      
                                      /* here's where the layout is adapted if landscape */
                                      @container perfect-bento (orientation: landscape) {
                                        grid-auto-flow: column;
                                        grid-auto-columns: 1fr;
                                        
                                        &:has(> :last-child:nth-child(3)) {
                                          grid-template-columns: repeat(4, 1fr);
                                        }
                                        
                                        &:has(> :last-child:nth-child(5)) > :first-child {
                                          grid-column: initial;
                                          grid-row: span 2;
                                        }
                                        
                                        &:has(> :last-child:nth-child(6)),
                                        &:has(> :last-child:nth-child(8)),
                                        &:has(> :last-child:nth-child(10)),
                                        &:has(> :last-child:nth-child(12)) {
                                          grid-template-rows: repeat(2, 1fr);
                                        }
                                        
                                        &:has(> :last-child:nth-child(9)) > :first-child {
                                          grid-column: span 2;
                                          grid-row: span 2;
                                        }
                                      }
                                    }
                                  }
                                  
                                  @layer demo.transitions {
                                    /* this makes the view transition (VT) pseudo elements not steal clicks */
                                    ::view-transition {
                                      pointer-events: none;
                                    }
                                    
                                    /* removes view transition on the page */
                                    /* helps isolate the morph effect to the grid */
                                    :root {
                                      view-transition-name: none;
                                    }
                                    
                                    /* make all the VT animations springy! */
                                    ::view-transition-group(*) {
                                      animation-timing-function: var(--ease-squish-1);
                                      animation-timing-function: var(--ease-spring-2);
                                      animation-duration: .75s;
                                    }
                                    
                                    /* this makes the box shape size morphs better */
                                    ::view-transition-old(*),
                                    ::view-transition-new(*) {
                                      height: 100%;
                                      width: 100%;
                                    }
                                    
                                    @media (prefers-reduced-motion: no-preference) {
                                      /* custom animation for new boxes coming in */
                                      /* uses Open Props animation and easing props */
                                      /* https://open-props.style/#animations */
                                      ::view-transition-new(*):only-child {
                                        animation: 
                                          var(--animation-slide-in-up) forwards,
                                          var(--animation-fade-in) forwards;
                                        animation-timing-function: var(--ease-squish-1);
                                        animation-timing-function: var(--ease-spring-2);
                                      }
                                  
                                      /* custom animation for old boxes going out */
                                      ::view-transition-old(*):only-child {
                                        animation: 
                                          var(--animation-slide-out-down) forwards,
                                          var(--animation-fade-out) forwards;
                                      }
                                    }
                                  }
                                  
                                  @layer demo.support {
                                    
                                    footer {
                                      display: flex;
                                      place-content: end;
                                      gap: var(--size-2);
                                    }
                                    
                                  .always-great-grid {
                                      display: grid;
                                      gap: var(--size-3);
                                      padding: var(--size-3);
                                    }
                                    
                                    .box {
                                      background: var(--surface-2);
                                      border-radius: var(--radius-3);
                                    }
                                    
                                  .container {
                                      overflow: hidden;
                                      resize: both;
                                      
                                      display: grid;
                                      block-size: min(var(--size-content-2), 50vw);
                                      inline-size: min(var(--size-content-2), 50vw);
                                      border: 1px solid var(--surface-3);
                                    }
                                  }
                                  `}
                                    </style>
                                </div>
                            </div>
                        </Border>
                    </article>
                </FadeIn>
            </div>
        </Container>
    );
}
