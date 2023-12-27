export type Players = number // 1-8

export type Board = number[][] //12*12 minimum
export type Kind = 'arrow'|'doubleArrow'|'hole'|'empty'|'checkpoint'|'repair'|'bonus'
export type Walls = {left: boolean, right: boolean, top: boolean, bottom: boolean}
export type Direction = 'up'|'down'|'left'|'right'
export type Rotation = 'left'|'right'|'uTurn'
export type Box = {kind: Kind, walls: Walls, direction: Direction, turn: Rotation} // direction and turn for arrows and doubleArrows
export type Card = {movement: number, rotation: Rotation}

export type Life = number // 0-3
export type cards = number // 0-9
export type Laser = {direction: Direction, start: number, end: number}
