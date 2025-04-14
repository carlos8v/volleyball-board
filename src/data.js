const colors = {
  yellow: "bg-radial-[at_25%_25%] from-yellow-300 to-yellow-600 to-75%",
  red: "bg-radial-[at_25%_25%] from-red-600 to-red-900 to-75%",
  green: "bg-radial-[at_25%_25%] from-green-400 to-green-700 to-75%",
  blue: "bg-radial-[at_25%_25%] from-indigo-500 to-indigo-900 to-75%",
};

const players = {
  setter: {
    id: 1,
    color: colors.yellow,
    label: "LEV",
  },
  outside1: {
    id: 2,
    color: colors.red,
    label: "PON1",
  },
  outside2: {
    id: 3,
    color: colors.red,
    label: "PON2",
  },
  central1: {
    id: 4,
    color: colors.blue,
    label: "CEN1",
  },
  central2: {
    id: 5,
    color: colors.blue,
    label: "CEN2",
  },
  oposite: {
    id: 6,
    color: colors.yellow,
    label: "OPO",
  },
  libero: {
    id: 7,
    color: colors.green,
    label: "LIB",
  },
};

const initial_positions_1 = [
  {
    x: 80,
    y: 67,
  },
  {
    x: 50,
    y: 67,
  },
  {
    x: 20,
    y: 67,
  },
  {
    x: 20,
    y: 15,
  },
  {
    x: 50,
    y: 15,
  },
  {
    x: 80,
    y: 15,
  },
];
const initial_positions_2 = [
  {
    x: 80,
    y: 67,
  },
  {
    x: 50,
    y: 67,
  },
  {
    x: 20,
    y: 67,
  },
  {
    x: 20,
    y: 15,
  },
  {
    x: 50,
    y: 15,
  },
  {
    x: 80,
    y: 15,
  },
];
const initial_positions_3 = [
  {
    x: 80,
    y: 67,
  },
  {
    x: 50,
    y: 67,
  },
  {
    x: 20,
    y: 67,
  },
  {
    x: 20,
    y: 15,
  },
  {
    x: 50,
    y: 15,
  },
  {
    x: 80,
    y: 15,
  },
];
const initial_positions_4 = [
  {
    x: 80,
    y: 67,
  },
  {
    x: 50,
    y: 67,
  },
  {
    x: 20,
    y: 67,
  },
  {
    x: 20,
    y: 15,
  },
  {
    x: 50,
    y: 15,
  },
  {
    x: 80,
    y: 15,
  },
];
const initial_positions_5 = [
  {
    x: 80,
    y: 67,
  },
  {
    x: 50,
    y: 67,
  },
  {
    x: 20,
    y: 67,
  },
  {
    x: 20,
    y: 15,
  },
  {
    x: 50,
    y: 15,
  },
  {
    x: 80,
    y: 15,
  },
];
const initial_positions_6 = [
  {
    x: 80,
    y: 67,
  },
  {
    x: 50,
    y: 67,
  },
  {
    x: 20,
    y: 67,
  },
  {
    x: 20,
    y: 15,
  },
  {
    x: 50,
    y: 15,
  },
  {
    x: 80,
    y: 15,
  },
];

// 5x1 Positions: Serve
const positions_5x1_serve_1 = [
  {
    ...players.central1,
    from: {
      x: -15,
      y: 15,
    },
    to: {
      x: -15,
      y: 15,
    },
  },
  {
    ...players.setter,
    from: {
      x: initial_positions_1[0].x,
      y: initial_positions_1[0].y,
    },
    to: {
      x: 80,
      y: 115,
    },
    position: 1,
  },
  {
    ...players.libero,
    from: {
      x: initial_positions_1[1].x,
      y: initial_positions_1[1].y,
    },
    to: {
      x: 50,
      y: 80,
    },
    position: 6,
  },
  {
    ...players.outside2,
    from: {
      x: initial_positions_1[2].x,
      y: initial_positions_1[2].y,
    },
    to: {
      x: 20,
      y: 60,
    },
    position: 5,
  },
  {
    ...players.oposite,
    from: {
      x: initial_positions_1[3].x,
      y: initial_positions_1[3].y,
    },
    to: {
      x: 35,
      y: 10,
    },
    position: 4,
  },
  {
    ...players.central2,
    from: {
      x: initial_positions_1[4].x,
      y: initial_positions_1[4].y,
    },
    to: {
      x: 50,
      y: 5,
    },
    position: 3,
  },
  {
    ...players.outside1,
    from: {
      x: initial_positions_1[5].x,
      y: initial_positions_1[5].y,
    },
    to: {
      x: 65,
      y: 15,
    },
    position: 2,
  },
];
const positions_5x1_serve_2 = [
  {
    ...players.central1,
    from: {
      x: -15,
      y: 15,
    },
    to: {
      x: -15,
      y: 15,
    },
  },
  {
    ...players.outside1,
    from: {
      x: initial_positions_2[0].x,
      y: initial_positions_2[0].y,
    },
    to: {
      x: 80,
      y: 115,
    },
    position: 1,
  },
  {
    ...players.setter,
    from: {
      x: initial_positions_2[1].x,
      y: initial_positions_2[1].y,
    },
    to: {
      x: 76,
      y: 67,
    },
    position: 6,
  },
  {
    ...players.libero,
    from: {
      x: initial_positions_2[2].x,
      y: initial_positions_2[2].y,
    },
    to: {
      x: 50,
      y: 80,
    },
    position: 5,
  },
  {
    ...players.outside2,
    from: {
      x: initial_positions_2[3].x,
      y: initial_positions_2[3].y,
    },
    to: {
      x: 20,
      y: 15,
    },
    position: 4,
  },
  {
    ...players.oposite,
    from: {
      x: initial_positions_2[4].x,
      y: initial_positions_2[4].y,
    },
    to: {
      x: 40,
      y: 20,
    },
    position: 3,
  },
  {
    ...players.central2,
    from: {
      x: initial_positions_2[5].x,
      y: initial_positions_2[5].y,
    },
    to: {
      x: 50,
      y: 5,
    },
    position: 2,
  },
];
const positions_5x1_serve_3 = [
  {
    ...players.libero,
    from: {
      x: -15,
      y: 15,
    },
    to: {
      x: -15,
      y: 15,
    },
  },
  {
    ...players.central2,
    from: {
      x: initial_positions_3[0].x,
      y: initial_positions_3[0].y,
    },
    to: {
      x: 80,
      y: 115,
    },
    position: 1,
  },
  {
    ...players.outside1,
    from: {
      x: initial_positions_3[1].x,
      y: initial_positions_3[1].y,
    },
    to: {
      x: 50,
      y: 67,
    },
    position: 6,
  },
  {
    ...players.setter,
    from: {
      x: initial_positions_3[2].x,
      y: initial_positions_3[2].y,
    },
    to: {
      x: 40,
      y: 50,
    },
    position: 5,
  },
  {
    ...players.central1,
    from: {
      x: initial_positions_3[3].x,
      y: initial_positions_3[3].y,
    },
    to: {
      x: 50,
      y: 5,
    },
    position: 4,
  },
  {
    ...players.outside2,
    from: {
      x: initial_positions_3[4].x,
      y: initial_positions_3[4].y,
    },
    to: {
      x: 60,
      y: 20,
    },
    position: 3,
  },
  {
    ...players.oposite,
    from: {
      x: initial_positions_3[5].x,
      y: initial_positions_3[5].y,
    },
    to: {
      x: 80,
      y: 15,
    },
    position: 2,
  },
];
const positions_5x1_serve_4 = [
  {
    ...players.central2,
    from: {
      x: -15,
      y: 15,
    },
    to: {
      x: -15,
      y: 15,
    },
  },
  {
    ...players.oposite,
    from: {
      x: initial_positions_4[0].x,
      y: initial_positions_4[0].y,
    },
    to: {
      x: 80,
      y: 115,
    },
    position: 1,
  },
  {
    ...players.libero,
    from: {
      x: initial_positions_4[1].x,
      y: initial_positions_4[1].y,
    },
    to: {
      x: 50,
      y: 75,
    },
    position: 6,
  },
  {
    ...players.outside1,
    from: {
      x: initial_positions_4[2].x,
      y: initial_positions_4[2].y,
    },
    to: {
      x: 20,
      y: 67,
    },
    position: 5,
  },
  {
    ...players.setter,
    from: {
      x: initial_positions_4[3].x,
      y: initial_positions_4[3].y,
    },
    to: {
      x: 35,
      y: 10,
    },
    position: 4,
  },
  {
    ...players.central1,
    from: {
      x: initial_positions_4[4].x,
      y: initial_positions_4[4].y,
    },
    to: {
      x: 50,
      y: 5,
    },
    position: 3,
  },
  {
    ...players.outside2,
    from: {
      x: initial_positions_4[5].x,
      y: initial_positions_4[5].y,
    },
    to: {
      x: 65,
      y: 15,
    },
    position: 2,
  },
];
const positions_5x1_serve_5 = [
  {
    ...players.central2,
    from: {
      x: -15,
      y: 15,
    },
    to: {
      x: -15,
      y: 15,
    },
  },
  {
    ...players.outside2,
    from: {
      x: initial_positions_5[0].x,
      y: initial_positions_5[0].y,
    },
    to: {
      x: 80,
      y: 115,
    },
    position: 1,
  },
  {
    ...players.oposite,
    from: {
      x: initial_positions_5[1].x,
      y: initial_positions_5[1].y,
    },
    to: {
      x: 80,
      y: 67,
    },
    position: 6,
  },
  {
    ...players.libero,
    from: {
      x: initial_positions_5[2].x,
      y: initial_positions_5[2].y,
    },
    to: {
      x: 50,
      y: 75,
    },
    position: 5,
  },
  {
    ...players.outside1,
    from: {
      x: initial_positions_5[3].x,
      y: initial_positions_5[3].y,
    },
    to: {
      x: 20,
      y: 15,
    },
    position: 4,
  },
  {
    ...players.setter,
    from: {
      x: initial_positions_5[4].x,
      y: initial_positions_5[4].y,
    },
    to: {
      x: 40,
      y: 20,
    },
    position: 3,
  },
  {
    ...players.central1,
    from: {
      x: initial_positions_5[5].x,
      y: initial_positions_5[5].y,
    },
    to: {
      x: 50,
      y: 5,
    },
    position: 2,
  },
];
const positions_5x1_serve_6 = [
  {
    ...players.libero,
    from: {
      x: -15,
      y: 15,
    },
    to: {
      x: -15,
      y: 15,
    },
  },
  {
    ...players.central1,
    from: {
      x: initial_positions_6[0].x,
      y: initial_positions_6[0].y,
    },
    to: {
      x: 80,
      y: 115,
    },
    position: 1,
  },
  {
    ...players.outside2,
    from: {
      x: initial_positions_6[1].x,
      y: initial_positions_6[1].y,
    },
    to: {
      x: 50,
      y: 75,
    },
    position: 6,
  },
  {
    ...players.oposite,
    from: {
      x: initial_positions_6[2].x,
      y: initial_positions_6[2].y,
    },
    to: {
      x: 20,
      y: 67,
    },
    position: 5,
  },
  {
    ...players.central2,
    from: {
      x: initial_positions_6[3].x,
      y: initial_positions_6[3].y,
    },
    to: {
      x: 50,
      y: 5,
    },
    position: 4,
  },
  {
    ...players.outside1,
    from: {
      x: initial_positions_6[4].x,
      y: initial_positions_6[4].y,
    },
    to: {
      x: 60,
      y: 20,
    },
    position: 3,
  },
  {
    ...players.setter,
    from: {
      x: initial_positions_6[5].x,
      y: initial_positions_6[5].y,
    },
    to: {
      x: 80,
      y: 15,
    },
    position: 2,
  },
];

// 5X1 Positions: Receive
const positions_5x1_receive_1 = [
  {
    ...players.central1,
    from: {
      x: -15,
      y: 15,
    },
    to: {
      x: -15,
      y: 15,
    },
  },
  {
    ...players.setter,
    from: {
      x: initial_positions_1[0].x,
      y: initial_positions_1[0].y,
    },
    to: {
      x: 85,
      y: 80,
    },
    position: 1,
  },
  {
    ...players.libero,
    from: {
      x: initial_positions_1[1].x,
      y: initial_positions_1[1].y,
    },
    to: {
      x: 50,
      y: 67,
    },
    position: 6,
  },
  {
    ...players.outside2,
    from: {
      x: initial_positions_1[2].x,
      y: initial_positions_1[2].y,
    },
    to: {
      x: 20,
      y: 67,
    },
    position: 5,
  },
  {
    ...players.oposite,
    from: {
      x: initial_positions_1[3].x,
      y: initial_positions_1[3].y,
    },
    to: {
      x: 20,
      y: 15,
    },
    position: 4,
  },
  {
    ...players.central2,
    from: {
      x: initial_positions_1[4].x,
      y: initial_positions_1[4].y,
    },
    to: {
      x: 50,
      y: 15,
    },
    position: 3,
  },
  {
    ...players.outside1,
    from: {
      x: initial_positions_1[5].x,
      y: initial_positions_1[5].y,
    },
    to: {
      x: 80,
      y: 67,
    },
    position: 2,
  },
];
const positions_5x1_receive_2 = [
  {
    ...players.central1,
    from: {
      x: -15,
      y: 15,
    },
    to: {
      x: -15,
      y: 15,
    },
  },
  {
    ...players.outside1,
    from: {
      x: initial_positions_2[0].x,
      y: initial_positions_2[0].y,
    },
    to: {
      x: 80,
      y: 67,
    },
    position: 1,
  },
  {
    ...players.setter,
    from: {
      x: initial_positions_2[1].x,
      y: initial_positions_2[1].y,
    },
    to: {
      x: 70,
      y: 30,
    },
    position: 6,
  },
  {
    ...players.libero,
    from: {
      x: initial_positions_2[2].x,
      y: initial_positions_2[2].y,
    },
    to: {
      x: 50,
      y: 75,
    },
    position: 5,
  },
  {
    ...players.outside2,
    from: {
      x: initial_positions_2[3].x,
      y: initial_positions_2[3].y,
    },
    to: {
      x: 20,
      y: 67,
    },
    position: 4,
  },
  {
    ...players.oposite,
    from: {
      x: initial_positions_2[4].x,
      y: initial_positions_2[4].y,
    },
    to: {
      x: 80,
      y: 15,
    },
    position: 3,
  },
  {
    ...players.central2,
    from: {
      x: initial_positions_2[5].x,
      y: initial_positions_2[5].y,
    },
    to: {
      x: 90,
      y: 35,
    },
    position: 2,
  },
];
const positions_5x1_receive_3 = [
  {
    ...players.central2,
    from: {
      x: -15,
      y: 15,
    },
    to: {
      x: -15,
      y: 15,
    },
  },
  {
    ...players.libero,
    from: {
      x: initial_positions_3[0].x,
      y: initial_positions_3[0].y,
    },
    to: {
      x: 80,
      y: 67,
    },
    position: 1,
  },
  {
    ...players.outside1,
    from: {
      x: initial_positions_3[1].x,
      y: initial_positions_3[1].y,
    },
    to: {
      x: 50,
      y: 75,
    },
    position: 6,
  },
  {
    ...players.setter,
    from: {
      x: initial_positions_3[2].x,
      y: initial_positions_3[2].y,
    },
    to: {
      x: 50,
      y: 15,
    },
    position: 5,
  },
  {
    ...players.central1,
    from: {
      x: initial_positions_3[3].x,
      y: initial_positions_3[3].y,
    },
    to: {
      x: 10,
      y: 15,
    },
    position: 4,
  },
  {
    ...players.outside2,
    from: {
      x: initial_positions_3[4].x,
      y: initial_positions_3[4].y,
    },
    to: {
      x: 20,
      y: 67,
    },
    position: 3,
  },
  {
    ...players.oposite,
    from: {
      x: initial_positions_3[5].x,
      y: initial_positions_3[5].y,
    },
    to: {
      x: 80,
      y: 15,
    },
    position: 2,
  },
];
const positions_5x1_receive_4 = [
  {
    ...players.central2,
    from: {
      x: -15,
      y: 15,
    },
    to: {
      x: -15,
      y: 15,
    },
  },
  {
    ...players.oposite,
    from: {
      x: initial_positions_4[0].x,
      y: initial_positions_4[0].y,
    },
    to: {
      x: 93,
      y: 90,
    },
    position: 1,
  },
  {
    ...players.libero,
    from: {
      x: initial_positions_4[1].x,
      y: initial_positions_4[1].y,
    },
    to: {
      x: 80,
      y: 67,
    },
    position: 6,
  },
  {
    ...players.outside1,
    from: {
      x: initial_positions_4[2].x,
      y: initial_positions_4[2].y,
    },
    to: {
      x: 50,
      y: 67,
    },
    position: 5,
  },
  {
    ...players.setter,
    from: {
      x: initial_positions_4[3].x,
      y: initial_positions_4[3].y,
    },
    to: {
      x: 5,
      y: 10,
    },
    position: 4,
  },
  {
    ...players.central1,
    from: {
      x: initial_positions_4[4].x,
      y: initial_positions_4[4].y,
    },
    to: {
      x: 10,
      y: 25,
    },
    position: 3,
  },
  {
    ...players.outside2,
    from: {
      x: initial_positions_4[5].x,
      y: initial_positions_4[5].y,
    },
    to: {
      x: 20,
      y: 67,
    },
    position: 2,
  },
];
const positions_5x1_receive_5 = [
  {
    ...players.central2,
    from: {
      x: -15,
      y: 15,
    },
    to: {
      x: -15,
      y: 15,
    },
  },
  {
    ...players.outside2,
    from: {
      x: initial_positions_5[0].x,
      y: initial_positions_5[0].y,
    },
    to: {
      x: 80,
      y: 67,
    },
    position: 1,
  },
  {
    ...players.oposite,
    from: {
      x: initial_positions_5[1].x,
      y: initial_positions_5[1].y,
    },
    to: {
      x: 60,
      y: 90,
    },
    position: 6,
  },
  {
    ...players.libero,
    from: {
      x: initial_positions_5[2].x,
      y: initial_positions_5[2].y,
    },
    to: {
      x: 50,
      y: 75,
    },
    position: 5,
  },
  {
    ...players.outside1,
    from: {
      x: initial_positions_5[3].x,
      y: initial_positions_5[3].y,
    },
    to: {
      x: 20,
      y: 67,
    },
    position: 4,
  },
  {
    ...players.setter,
    from: {
      x: initial_positions_5[4].x,
      y: initial_positions_5[4].y,
    },
    to: {
      x: 60,
      y: 10,
    },
    position: 3,
  },
  {
    ...players.central1,
    from: {
      x: initial_positions_5[5].x,
      y: initial_positions_5[5].y,
    },
    to: {
      x: 80,
      y: 15,
    },
    position: 2,
  },
];
const positions_5x1_receive_6 = [
  {
    ...players.central1,
    from: {
      x: -15,
      y: 15,
    },
    to: {
      x: -15,
      y: 15,
    },
  },
  {
    ...players.libero,
    from: {
      x: initial_positions_6[0].x,
      y: initial_positions_6[0].y,
    },
    to: {
      x: 80,
      y: 67,
    },
    position: 1,
  },
  {
    ...players.outside2,
    from: {
      x: initial_positions_6[1].x,
      y: initial_positions_6[1].y,
    },
    to: {
      x: 50,
      y: 75,
    },
    position: 6,
  },
  {
    ...players.oposite,
    from: {
      x: initial_positions_6[2].x,
      y: initial_positions_6[2].y,
    },
    to: {
      x: 40,
      y: 90,
    },
    position: 5,
  },
  {
    ...players.central2,
    from: {
      x: initial_positions_6[3].x,
      y: initial_positions_6[3].y,
    },
    to: {
      x: 10,
      y: 15,
    },
    position: 4,
  },
  {
    ...players.outside1,
    from: {
      x: initial_positions_6[4].x,
      y: initial_positions_6[4].y,
    },
    to: {
      x: 20,
      y: 67,
    },
    position: 3,
  },
  {
    ...players.setter,
    from: {
      x: initial_positions_6[5].x,
      y: initial_positions_6[5].y,
    },
    to: {
      x: 60,
      y: 10,
    },
    position: 2,
  },
];

export const positions_5x1_serve = [
  positions_5x1_serve_1,
  positions_5x1_serve_2,
  positions_5x1_serve_3,
  positions_5x1_serve_4,
  positions_5x1_serve_5,
  positions_5x1_serve_6,
];
export const positions_5x1_receive = [
  positions_5x1_receive_1,
  positions_5x1_receive_2,
  positions_5x1_receive_3,
  positions_5x1_receive_4,
  positions_5x1_receive_5,
  positions_5x1_receive_6,
];

export const currentPositions = positions_5x1_serve;
