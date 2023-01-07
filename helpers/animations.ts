import anime from "animejs";
import { useEffect } from "react";

export const mainLoop = (loopCallback?: () => void) => {
  useEffect(() => {
    const animations = [
      anime({
        targets: "#inicio",
        loop: true,
        opacity: [
          { value: 0.1, easing: "easeOutSine", duration: 1500 },
          { value: 1, easing: "easeInOutQuad", duration: 1500 },
        ],
      }),
      anime
        .timeline({
          duration: 750,
          loop: true,
          loopBegin: loopCallback,
        })
        .add({
          targets: "#aviso",
          duration: 1,
          translateY: "-150%",
        })
        .add({
          targets: "#igrejas",
          duration: 1,
          scale: 0.8,
          opacity: 0,
        })
        .add({
          targets: "#pregacao",
          duration: 1,
          scale: 0.8,
          opacity: 0,
        })
        .add(
          {
            targets: "#aviso",
            easing: "easeOutExpo",
            duration: 750,
            translateY: 0,
          },
          "+=1000"
        )
        .add(
          {
            targets: "#igrejas",
            easing: "easeOutExpo",
            duration: 750,
            scale: 1,
            opacity: 1,
          },
          "-=550"
        )
        .add(
          {
            targets: "#pregacao",
            easing: "easeOutExpo",
            duration: 750,
            scale: 1,
            opacity: 1,
          },
          "-=550"
        )
        .add(
          {
            targets: "#aviso",
            easing: "easeInExpo",
            duration: 750,
            translateY: "-150%",
          },
          "+=10000"
        )
        .add(
          {
            targets: "#igrejas",
            easing: "easeInExpo",
            duration: 750,
            scale: 0.8,
            opacity: 0,
          },
          "-=550"
        )
        .add(
          {
            targets: "#pregacao",
            easing: "easeInExpo",
            duration: 750,
            scale: 0.8,
            opacity: 0,
          },
          "-=550"
        ),
    ];

    return () =>
      animations.forEach((a) => {
        a.pause();
      });
  }, []);
};

export const socialLoop = (loopCallback?: () => void) => {
  useEffect(() => {
    const animation = anime
      .timeline({
        loop: true,
        easing: "easeInOutQuad",
        delay: anime.stagger(500),
        loopBegin: loopCallback,
      })
      .add({
        targets: ".redes",
        delay: 0,
        opacity: { value: 0, duration: 1 },
        scale: { value: 0.5, duration: 1 },
      })
      .add({
        targets: ".social",
        delay: 0,
        opacity: { value: 0, duration: 1 },
        scale: { value: 0.5, duration: 1 },
      })
      .add({
        targets: ".social",
        opacity: { value: 1, duration: 300 },
        scale: { value: 1, duration: 300 },
      })
      .add(
        {
          targets: ".social",
          opacity: { value: 0, duration: 1300 },
          scale: { value: 0.5, duration: 1300 },
        },
        "+=15000"
      )
      .add({
        targets: ".redes",
        opacity: { value: 1, duration: 300 },
        scale: { value: 1, duration: 300 },
      })
      .add(
        {
          targets: ".redes",
          opacity: { value: 0, duration: 1300 },
          scale: { value: 0.5, duration: 1300 },
        },
        "+=15000"
      );

    return () => animation.pause();
  }, []);
};
