import * as React from "react";
import CSS from "csstype";

import { RootStore } from "../../stores/rootStore";
import { useObserver } from "mobx-react-lite";
import { Sprite } from "../../models/Sprite";
import { spriteTakeTurn } from "../../_StartHere/spriteTakeTurn";

let turn = 0;
let inited = false;

export const GameContainer = (props: { rootStore: RootStore }) => {
  const { rootStore } = props;
  React.useEffect(() => {
    console.log("HomeContainer was re-rendered");
  });

  if (!inited) {
    inited = true;
    window.setInterval(() => {
      rootStore.gameStore.sprites.forEach(sprite => {
        spriteTakeTurn(sprite);
      });
    }, 50);
  }

  const { gameStore } = rootStore;

  const getStyleForSprite = (sprite: Sprite) => {
    const result: CSS.Properties = {
      position: "absolute",
      transform: `scale(${sprite.scaling.x}, ${sprite.scaling.y}) rotate(${
        sprite.angle
      }deg)`,
      left: -sprite.size.x / 2 + "px",
      top: -sprite.size.y / 2 + "px",
      width: sprite.size.x + "px",
      height: sprite.size.y + "px",
      backgroundImage: `url(${sprite.imageUrl})`,
      backgroundSize: "cover",
      opacity: sprite.opacity
    };
    return result;
  };

  return useObserver(() => (
    <>
      <div
        style={{
          overflow: "hidden",
          backgroundColor: "black",
          position: "absolute",
          width: "100px",
          height: "100px",
          transform: "scale(5)",
          transformOrigin: "0 0"
        }}
      >
        {gameStore.sprites.map(sprite => (
          <div
            key={sprite.id}
            style={{
              position: "absolute",
              transform: `translate(${sprite.location.x + "px"},${sprite
                .location.y + "px"})`
            }}
          >
            <div style={getStyleForSprite(sprite)} />
            {sprite.message && (
              <div
                style={{
                  backgroundColor: "lightyellow",
                  fontSize: 6,
                  paddingTop: 1,
                  paddingLeft: 5,
                  paddingRight: 1
                }}
              >
                {sprite.message}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  ));
};
