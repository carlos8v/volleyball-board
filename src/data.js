const colors = {
  yellow: "bg-radial-[at_25%_25%] from-yellow-300 to-yellow-600 to-75%",
  red: "bg-radial-[at_25%_25%] from-red-600 to-red-900 to-75%",
  green: "bg-radial-[at_25%_25%] from-green-400 to-green-700 to-75%",
  blue: "bg-radial-[at_25%_25%] from-indigo-500 to-indigo-900 to-75%",
};

const players = {
  libero: {
    color: colors.green,
    label: "LIB",
  },
  setter: {
    color: colors.yellow,
    label: "LEV",
  },
  outside1: {
    color: colors.red,
    label: "PON1",
  },
  outside2: {
    color: colors.red,
    label: "PON2",
  },
  central1: {
    color: colors.blue,
    label: "CEN1",
  },
  central2: {
    color: colors.blue,
    label: "CEN2",
  },
  oposite: {
    color: colors.yellow,
    label: "OPO",
  },
};

const initial_positions_1 = [
  {
    x: 80,
    y: 67,
    player: players.setter,
    position: 1,
  },
  {
    x: 50,
    y: 67,
    player: players.libero,
    position: 6,
  },
  {
    x: 20,
    y: 67,
    player: players.outside2,
    position: 5,
  },
  {
    x: 20,
    y: 15,
    player: players.oposite,
    position: 4,
  },
  {
    x: 50,
    y: 15,
    player: players.central2,
    position: 3,
  },
  {
    x: 80,
    y: 15,
    player: players.outside1,
    position: 2,
  },
];
const initial_positions_2 = [
  {
    x: 80,
    y: 67,
    player: players.outside1,
    position: 1,
  },
  {
    x: 50,
    y: 67,
    player: players.setter,
    position: 6,
  },
  {
    x: 20,
    y: 67,
    player: players.libero,
    position: 5,
  },
  {
    x: 20,
    y: 15,
    player: players.outside2,
    position: 4,
  },
  {
    x: 50,
    y: 15,
    player: players.oposite,
    position: 3,
  },
  {
    x: 80,
    y: 15,
    player: players.central2,
    position: 2,
  },
];
const initial_positions_3 = [
  {
    x: 80,
    y: 67,
    player: players.libero,
    position: 1,
  },
  {
    x: 50,
    y: 67,
    player: players.outside1,
    position: 6,
  },
  {
    x: 20,
    y: 67,
    player: players.setter,
    position: 5,
  },
  {
    x: 20,
    y: 15,
    player: players.central1,
    position: 4,
  },
  {
    x: 50,
    y: 15,
    player: players.outside2,
    position: 3,
  },
  {
    x: 80,
    y: 15,
    player: players.oposite,
    position: 2,
  },
];
const initial_positions_4 = [
  {
    x: 80,
    y: 67,
    player: players.oposite,
    position: 1,
  },
  {
    x: 50,
    y: 67,
    player: players.libero,
    position: 6,
  },
  {
    x: 20,
    y: 67,
    player: players.outside1,
    position: 5,
  },
  {
    x: 20,
    y: 15,
    player: players.setter,
    position: 4,
  },
  {
    x: 50,
    y: 15,
    player: players.central1,
    position: 3,
  },
  {
    x: 80,
    y: 15,
    player: players.outside2,
    position: 2,
  },
];
const initial_positions_5 = [
  {
    x: 80,
    y: 67,
    player: players.outside2,
    position: 1,
  },
  {
    x: 50,
    y: 67,
    player: players.oposite,
    position: 6,
  },
  {
    x: 20,
    y: 67,
    player: players.libero,
    position: 5,
  },
  {
    x: 20,
    y: 15,
    player: players.outside1,
    position: 4,
  },
  {
    x: 50,
    y: 15,
    player: players.setter,
    position: 3,
  },
  {
    x: 80,
    y: 15,
    player: players.central1,
    position: 2,
  },
];
const initial_positions_6 = [
  {
    x: 80,
    y: 67,
    player: players.libero,
    position: 1,
  },
  {
    x: 50,
    y: 67,
    player: players.outside2,
    position: 6,
  },
  {
    x: 20,
    y: 67,
    player: players.oposite,
    position: 5,
  },
  {
    x: 20,
    y: 15,
    player: players.central2,
    position: 4,
  },
  {
    x: 50,
    y: 15,
    player: players.outside1,
    position: 3,
  },
  {
    x: 80,
    y: 15,
    player: players.setter,
    position: 2,
  },
];

// 5x1 Positions: Serve
const positions_5x1_serve_1 = [
  {
    from: {
      x: initial_positions_1[0].x,
      y: initial_positions_1[0].y,
    },
    to: {
      x: 80,
      y: 100,
    },
    player: players.setter,
    position: 1,
  },
  {
    from: {
      x: initial_positions_1[1].x,
      y: initial_positions_1[1].y,
    },
    to: {
      x: 50,
      y: 80,
    },
    player: players.libero,
    position: 6,
  },
  {
    from: {
      x: initial_positions_1[2].x,
      y: initial_positions_1[2].y,
    },
    to: {
      x: 20,
      y: 60,
    },
    player: players.outside2,
    position: 5,
  },
  {
    from: {
      x: initial_positions_1[3].x,
      y: initial_positions_1[3].y,
    },
    to: {
      x: 35,
      y: 10,
    },
    player: players.oposite,
    position: 4,
  },
  {
    from: {
      x: initial_positions_1[4].x,
      y: initial_positions_1[4].y,
    },
    to: {
      x: 50,
      y: 5,
    },
    player: players.central2,
    position: 3,
  },
  {
    from: {
      x: initial_positions_1[5].x,
      y: initial_positions_1[5].y,
    },
    to: {
      x: 65,
      y: 15,
    },
    player: players.outside1,
    position: 2,
  },
];
const positions_5x1_serve_2 = [
  {
    from: {
      x: initial_positions_2[0].x,
      y: initial_positions_2[0].y,
    },
    to: {
      x: 80,
      y: 100,
    },
    player: players.outside1,
    position: 1,
  },
  {
    from: {
      x: initial_positions_2[1].x,
      y: initial_positions_2[1].y,
    },
    to: {
      x: 76,
      y: 67,
    },
    player: players.setter,
    position: 6,
  },
  {
    from: {
      x: initial_positions_2[2].x,
      y: initial_positions_2[2].y,
    },
    to: {
      x: 50,
      y: 80,
    },
    player: players.libero,
    position: 5,
  },
  {
    from: {
      x: initial_positions_2[3].x,
      y: initial_positions_2[3].y,
    },
    to: {
      x: 20,
      y: 15,
    },
    player: players.outside2,
    position: 4,
  },
  {
    from: {
      x: initial_positions_2[4].x,
      y: initial_positions_2[4].y,
    },
    to: {
      x: 40,
      y: 20,
    },
    player: players.oposite,
    position: 3,
  },
  {
    from: {
      x: initial_positions_2[5].x,
      y: initial_positions_2[5].y,
    },
    to: {
      x: 50,
      y: 5,
    },
    player: players.central1,
    position: 2,
  },
];

// 5X1 Positions: Receive
const positions_5x1_receive_1 = [
  {
    from: {
      x: initial_positions_1[0].x,
      y: initial_positions_1[0].y,
    },
    to: {
      x: 85,
      y: 80,
    },
    player: players.setter,
    position: 1,
  },
  {
    from: {
      x: initial_positions_1[1].x,
      y: initial_positions_1[1].y,
    },
    to: {
      x: 50,
      y: 67,
    },
    player: players.libero,
    position: 6,
  },
  {
    from: {
      x: initial_positions_1[2].x,
      y: initial_positions_1[2].y,
    },
    to: {
      x: 20,
      y: 67,
    },
    player: players.outside2,
    position: 5,
  },
  {
    from: {
      x: initial_positions_1[3].x,
      y: initial_positions_1[3].y,
    },
    to: {
      x: 20,
      y: 15,
    },
    player: players.oposite,
    position: 4,
  },
  {
    from: {
      x: initial_positions_1[4].x,
      y: initial_positions_1[4].y,
    },
    to: {
      x: 50,
      y: 15,
    },
    player: players.central2,
    position: 3,
  },
  {
    from: {
      x: initial_positions_1[5].x,
      y: initial_positions_1[5].y,
    },
    to: {
      x: 80,
      y: 67,
    },
    player: players.outside1,
    position: 2,
  },
];
const positions_5x1_receive_2 = [
  {
    from: {
      x: initial_positions_2[0].x,
      y: initial_positions_2[0].y,
    },
    to: {
      x: 80,
      y: 67,
    },
    player: players.outside1,
    position: 1,
  },
  {
    from: {
      x: initial_positions_2[1].x,
      y: initial_positions_2[1].y,
    },
    to: {
      x: 70,
      y: 30,
    },
    player: players.setter,
    position: 6,
  },
  {
    from: {
      x: initial_positions_2[2].x,
      y: initial_positions_2[2].y,
    },
    to: {
      x: 50,
      y: 80,
    },
    player: players.libero,
    position: 5,
  },
  {
    from: {
      x: initial_positions_2[3].x,
      y: initial_positions_2[3].y,
    },
    to: {
      x: 20,
      y: 67,
    },
    player: players.outside2,
    position: 4,
  },
  {
    from: {
      x: initial_positions_2[4].x,
      y: initial_positions_2[4].y,
    },
    to: {
      x: 80,
      y: 15,
    },
    player: players.oposite,
    position: 3,
  },
  {
    from: {
      x: initial_positions_2[5].x,
      y: initial_positions_2[5].y,
    },
    to: {
      x: 90,
      y: 35,
    },
    player: players.central2,
    position: 2,
  },
];

export const positions_5x1_serve = [
  positions_5x1_serve_1,
  positions_5x1_serve_2,
];
export const positions_5x1_receive = [
  positions_5x1_receive_1,
  positions_5x1_receive_2,
];

export const initial_positions = [
  initial_positions_1,
  initial_positions_2,
  initial_positions_3,
  initial_positions_4,
  initial_positions_5,
  initial_positions_6,
];
export const currentPositions = positions_5x1_serve;
