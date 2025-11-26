

const scroller = scrollama();

const frames = [
  document.getElementById("plot-0"),
  document.getElementById("plot-1"),
  document.getElementById("plot-2")
];

let currentStep = 0;

// Show first graph interactivity
frames[0].style.opacity = 1;
frames[0].style.pointerEvents = "auto";

scroller
  .setup({
    step: ".step",
    offset: 0.6,
  })
  .onStepEnter((response) => {
    const step = response.index;

    if (step !== currentStep) {
      // fade out old
      frames[currentStep].style.opacity = 0;
      frames[currentStep].style.pointerEvents = "none";

      // fade in new
      frames[step].style.opacity = 1;
      frames[step].style.pointerEvents = "auto";

      currentStep = step;
    }
  });

window.addEventListener("resize", scroller.resize);