const colors = {
  yellow: "bg-radial-[at_25%_25%] from-yellow-300 to-yellow-600 to-75%",
  red: "bg-radial-[at_25%_25%] from-red-600 to-rose-900 to-75%",
  green: "bg-radial-[at_25%_25%] from-green-500 to-emerald-700 to-75%",
  blue: "bg-radial-[at_25%_25%] from-sky-700 to-indigo-900 to-75%",
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

const initial_positions = [
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
const positions_5x1_serve_1 = {
  keyframes: 2,
  positions: [
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
      from: initial_positions[0],
      to: {
        x: 80,
        y: 110,
      },
      animations: [
        {
          x: 80,
          y: 110,
        },
        {
          x: 80,
          y: 55,
        },
      ],
      position: 1,
    },
    {
      ...players.libero,
      from: initial_positions[1],
      to: {
        x: 50,
        y: 75,
      },
      animations: [
        {
          x: 50,
          y: 75,
        },
        {
          x: 20,
          y: 55,
        },
      ],
      position: 6,
    },
    {
      ...players.outside2,
      from: initial_positions[2],
      to: {
        x: 40,
        y: 60,
      },
      animations: [
        {
          x: 40,
          y: 60,
        },
        {
          x: 50,
          y: 75,
        },
      ],
      position: 5,
    },
    {
      ...players.oposite,
      from: initial_positions[3],
      to: {
        x: 35,
        y: 10,
      },
      animations: [
        {
          x: 35,
          y: 10,
        },
        {
          x: 80,
          y: 5,
        },
      ],
      position: 4,
    },
    {
      ...players.central2,
      from: initial_positions[4],
      to: {
        x: 50,
        y: 5,
      },
      position: 3,
    },
    {
      ...players.outside1,
      from: initial_positions[5],
      to: {
        x: 65,
        y: 15,
      },
      animations: [
        {
          x: 65,
          y: 15,
        },
        {
          x: 20,
          y: 5,
        },
      ],
      position: 2,
    },
  ],
};
const positions_5x1_serve_2 = {
  keyframes: 2,
  positions: [
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
      from: initial_positions[0],
      to: {
        x: 80,
        y: 110,
      },
      animations: [
        {
          x: 80,
          y: 110,
        },
        {
          x: 50,
          y: 75,
        },
      ],
      position: 1,
    },
    {
      ...players.setter,
      from: initial_positions[1],
      to: {
        x: 75,
        y: 67,
      },
      animations: [
        {
          x: 75,
          y: 67,
        },
        {
          x: 80,
          y: 55,
        },
      ],
      position: 6,
    },
    {
      ...players.libero,
      from: initial_positions[2],
      to: initial_positions[2],
      animations: [
        initial_positions[2],
        {
          x: 20,
          y: 55,
        },
      ],
      position: 5,
    },
    {
      ...players.outside2,
      from: initial_positions[3],
      to: {
        x: 20,
        y: 15,
      },
      animations: [
        {
          x: 20,
          y: 15,
        },
        {
          x: 20,
          y: 5,
        },
      ],
      position: 4,
    },
    {
      ...players.oposite,
      from: initial_positions[4],
      to: {
        x: 40,
        y: 20,
      },
      animations: [
        {
          x: 40,
          y: 20,
        },
        {
          x: 80,
          y: 5,
        },
      ],
      position: 3,
    },
    {
      ...players.central2,
      from: initial_positions[5],
      to: {
        x: 50,
        y: 5,
      },
      position: 2,
    },
  ],
};
const positions_5x1_serve_3 = {
  keyframes: 2,
  positions: [
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
      from: initial_positions[0],
      to: {
        x: 80,
        y: 110,
      },
      animations: [
        {
          x: 80,
          y: 110,
        },
        {
          x: 20,
          y: 55,
        },
      ],
      position: 1,
    },
    {
      ...players.outside1,
      from: initial_positions[1],
      to: {
        x: 50,
        y: 75,
      },
      animations: [
        {
          x: 50,
          y: 75,
        },
        {
          x: 50,
          y: 75,
        },
      ],
      position: 6,
    },
    {
      ...players.setter,
      from: initial_positions[2],
      to: {
        x: 40,
        y: 60,
      },
      position: 5,
      animations: [
        {
          x: 40,
          y: 60,
        },
        {
          x: 80,
          y: 55,
        },
      ],
    },
    {
      ...players.central1,
      from: initial_positions[3],
      to: {
        x: 40,
        y: 5,
      },
      animations: [
        {
          x: 40,
          y: 5,
        },
        {
          x: 50,
          y: 5,
        },
      ],
      position: 4,
    },
    {
      ...players.outside2,
      from: initial_positions[4],
      to: initial_positions[4],
      animations: [
        initial_positions[4],
        {
          x: 20,
          y: 5,
        },
      ],
      position: 3,
    },
    {
      ...players.oposite,
      from: initial_positions[5],
      to: {
        x: 80,
        y: 15,
      },
      animations: [
        {
          x: 80,
          y: 15,
        },
        {
          x: 80,
          y: 5,
        },
      ],
      position: 2,
    },
  ],
};
const positions_5x1_serve_4 = {
  keyframes: 2,
  positions: [
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
      from: initial_positions[0],
      to: {
        x: 80,
        y: 110,
      },
      animations: [
        {
          x: 80,
          y: 110,
        },
        {
          x: 80,
          y: 55,
        },
      ],
      position: 1,
    },
    {
      ...players.libero,
      from: initial_positions[1],
      to: {
        x: 50,
        y: 75,
      },
      animations: [
        {
          x: 50,
          y: 75,
        },
        {
          x: 20,
          y: 55,
        },
      ],
      position: 6,
    },
    {
      ...players.outside1,
      from: initial_positions[2],
      to: {
        x: 40,
        y: 60,
      },
      animations: [
        {
          x: 40,
          y: 60,
        },
        {
          x: 50,
          y: 75,
        },
      ],
      position: 5,
    },
    {
      ...players.setter,
      from: initial_positions[3],
      to: {
        x: 35,
        y: 10,
      },
      animations: [
        {
          x: 35,
          y: 10,
        },
        {
          x: 80,
          y: 5,
        },
      ],
      position: 4,
    },
    {
      ...players.central1,
      from: initial_positions[4],
      to: {
        x: 50,
        y: 5,
      },
      position: 3,
    },
    {
      ...players.outside2,
      from: initial_positions[5],
      to: {
        x: 65,
        y: 15,
      },
      animations: [
        {
          x: 65,
          y: 15,
        },
        {
          x: 20,
          y: 5,
        },
      ],
      position: 2,
    },
  ],
};
const positions_5x1_serve_5 = {
  keyframes: 0,
  positions: [
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
      from: initial_positions[0],
      to: {
        x: 80,
        y: 110,
      },
      position: 1,
    },
    {
      ...players.oposite,
      from: initial_positions[1],
      to: {
        x: 80,
        y: 67,
      },
      position: 6,
    },
    {
      ...players.libero,
      from: initial_positions[2],
      to: {
        x: 50,
        y: 75,
      },
      position: 5,
    },
    {
      ...players.outside1,
      from: initial_positions[3],
      to: {
        x: 20,
        y: 15,
      },
      position: 4,
    },
    {
      ...players.setter,
      from: initial_positions[4],
      to: {
        x: 40,
        y: 20,
      },
      position: 3,
    },
    {
      ...players.central1,
      from: initial_positions[5],
      to: {
        x: 50,
        y: 5,
      },
      position: 2,
    },
  ],
};
const positions_5x1_serve_6 = {
  keyframes: 0,
  positions: [
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
      from: initial_positions[0],
      to: {
        x: 80,
        y: 110,
      },
      position: 1,
    },
    {
      ...players.outside2,
      from: initial_positions[1],
      to: {
        x: 50,
        y: 75,
      },
      position: 6,
    },
    {
      ...players.oposite,
      from: initial_positions[2],
      to: {
        x: 40,
        y: 60,
      },
      position: 5,
    },
    {
      ...players.central2,
      from: initial_positions[3],
      to: {
        x: 50,
        y: 5,
      },
      position: 4,
    },
    {
      ...players.outside1,
      from: initial_positions[4],
      to: {
        x: 60,
        y: 20,
      },
      position: 3,
    },
    {
      ...players.setter,
      from: initial_positions[5],
      to: {
        x: 80,
        y: 15,
      },
      position: 2,
    },
  ],
};

// 5X1 Positions: Receive
const positions_5x1_receive_1 = {
  keyframes: 4,
  positions: [
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
      from: initial_positions[0],
      to: {
        x: 90,
        y: 80,
      },
      animations: [
        {
          x: 90,
          y: 80,
        },
        {
          x: 65,
          y: 15,
        },
        {
          x: 65,
          y: 15,
        },
        {
          x: 80,
          y: 55,
        },
      ],
      position: 1,
    },
    {
      ...players.libero,
      from: initial_positions[1],
      to: {
        x: 50,
        y: 67,
      },
      animations: [
        {
          x: 50,
          y: 67,
        },
        {
          x: 50,
          y: 67,
        },
        {
          x: 50,
          y: 55,
        },
        {
          x: 20,
          y: 55,
        },
      ],
      position: 6,
    },
    {
      ...players.outside2,
      from: initial_positions[2],
      to: {
        x: 20,
        y: 67,
      },
      animations: [
        initial_positions[2],
        initial_positions[2],
        {
          x: 30,
          y: 45,
        },
        {
          x: 50,
          y: 75,
        },
      ],
      position: 5,
    },
    {
      ...players.oposite,
      from: initial_positions[3],
      to: {
        x: 20,
        y: 15,
      },
      animations: [
        {
          x: 20,
          y: 15,
        },
        {
          x: 5,
          y: 35,
        },
        {
          x: 20,
          y: 5,
        },
        {
          x: 80,
          y: 5,
        },
      ],
      position: 4,
    },
    {
      ...players.central2,
      from: initial_positions[4],
      to: {
        x: 50,
        y: 15,
      },
      animations: [
        {
          x: 50,
          y: 15,
        },
        {
          x: 50,
          y: 35,
        },
        {
          x: 50,
          y: 5,
        },
      ],
      position: 3,
    },
    {
      ...players.outside1,
      from: initial_positions[5],
      to: {
        x: 80,
        y: 67,
      },
      animations: [
        {
          x: 80,
          y: 67,
        },
        {
          x: 95,
          y: 35,
        },
        {
          x: 80,
          y: 5,
        },
        {
          x: 20,
          y: 5,
        },
      ],
      position: 2,
    },
  ],
};
const positions_5x1_receive_2 = {
  keyframes: 4,
  positions: [
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
      from: initial_positions[0],
      to: {
        x: 80,
        y: 67,
      },
      animations: [
        {
          x: 80,
          y: 67,
        },
        initial_positions[1],
        {
          x: 50,
          y: 45,
        },
        {
          x: 50,
          y: 75,
        },
      ],
      position: 1,
    },
    {
      ...players.setter,
      from: initial_positions[1],
      to: {
        x: 65,
        y: 25,
      },
      animations: [
        {
          x: 65,
          y: 25,
        },
        {
          x: 65,
          y: 15,
        },
        {
          x: 65,
          y: 15,
        },
        {
          x: 80,
          y: 55,
        },
      ],
      position: 6,
    },
    {
      ...players.libero,
      from: initial_positions[2],
      to: {
        x: 50,
        y: 75,
      },
      animations: [
        {
          x: 50,
          y: 75,
        },
        initial_positions[2],
        {
          x: 20,
          y: 35,
        },
        {
          x: 20,
          y: 55,
        },
      ],
      position: 5,
    },
    {
      ...players.outside2,
      from: initial_positions[3],
      to: {
        x: 20,
        y: 67,
      },
      animations: [
        {
          x: 20,
          y: 67,
        },
        {
          x: 5,
          y: 35,
        },
        {
          x: 20,
          y: 5,
        },
      ],
      position: 4,
    },
    {
      ...players.oposite,
      from: initial_positions[4],
      to: {
        x: 75,
        y: 15,
      },
      animations: [
        {
          x: 75,
          y: 15,
        },
        {
          x: 95,
          y: 35,
        },
        {
          x: 80,
          y: 5,
        },
      ],
      position: 3,
    },
    {
      ...players.central2,
      from: initial_positions[5],
      to: {
        x: 90,
        y: 35,
      },
      animations: [
        {
          x: 90,
          y: 35,
        },
        {
          x: 50,
          y: 35,
        },
        {
          x: 50,
          y: 5,
        },
      ],
      position: 2,
    },
  ],
};
const positions_5x1_receive_3 = {
  keyframes: 4,
  positions: [
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
      from: initial_positions[0],
      to: {
        x: 80,
        y: 67,
      },
      animations: [
        {
          x: 80,
          y: 67,
        },
        {
          x: 80,
          y: 67,
        },
        {
          x: 80,
          y: 45,
        },
        {
          x: 20,
          y: 55,
        },
      ],
      position: 1,
    },
    {
      ...players.outside1,
      from: initial_positions[1],
      to: {
        x: 50,
        y: 75,
      },
      animations: [
        {
          x: 50,
          y: 75,
        },
        {
          x: 50,
          y: 65,
        },
        {
          x: 50,
          y: 45,
        },
        {
          x: 50,
          y: 75,
        },
      ],
      position: 6,
    },
    {
      ...players.setter,
      from: initial_positions[2],
      to: {
        x: 45,
        y: 15,
      },
      animations: [
        {
          x: 45,
          y: 15,
        },
        {
          x: 65,
          y: 15,
        },
        {
          x: 65,
          y: 15,
        },
        {
          x: 80,
          y: 55,
        },
      ],
      position: 5,
    },
    {
      ...players.central1,
      from: initial_positions[3],
      to: {
        x: 10,
        y: 15,
      },
      animations: [
        {
          x: 10,
          y: 15,
        },
        {
          x: 45,
          y: 35,
        },
        {
          x: 50,
          y: 5,
        },
      ],
      position: 4,
    },
    {
      ...players.outside2,
      from: initial_positions[4],
      to: {
        x: 20,
        y: 67,
      },
      animations: [
        {
          x: 20,
          y: 67,
        },
        {
          x: 5,
          y: 35,
        },
        {
          x: 20,
          y: 5,
        },
      ],
      position: 3,
    },
    {
      ...players.oposite,
      from: initial_positions[5],
      to: {
        x: 80,
        y: 15,
      },
      animations: [
        {
          x: 80,
          y: 15,
        },
        {
          x: 95,
          y: 35,
        },
        {
          x: 80,
          y: 5,
        },
        {
          x: 80,
          y: 5,
        },
      ],
      position: 2,
    },
  ],
};
const positions_5x1_receive_4 = {
  keyframes: 4,
  positions: [
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
      from: initial_positions[0],
      to: {
        x: 93,
        y: 90,
      },
      animations: [
        {
          x: 93,
          y: 90,
        },
        initial_positions[0],
        {
          x: 80,
          y: 45,
        },
        {
          x: 80,
          y: 55,
        },
      ],
      position: 1,
    },
    {
      ...players.libero,
      from: initial_positions[1],
      to: {
        x: 80,
        y: 67,
      },
      animations: [
        {
          x: 80,
          y: 67,
        },
        initial_positions[2],
        {
          x: 30,
          y: 45,
        },
        {
          x: 20,
          y: 55,
        },
      ],
      position: 6,
    },
    {
      ...players.outside1,
      from: initial_positions[2],
      to: {
        x: 50,
        y: 75,
      },
      animations: [
        {
          x: 50,
          y: 75,
        },
        initial_positions[1],
        {
          x: 50,
          y: 50,
        },
        {
          x: 50,
          y: 75,
        },
      ],
      position: 5,
    },
    {
      ...players.setter,
      from: initial_positions[3],
      to: {
        x: 5,
        y: 10,
      },
      animations: [
        {
          x: 5,
          y: 10,
        },
        {
          x: 65,
          y: 15,
        },
        {
          x: 65,
          y: 15,
        },
        {
          x: 80,
          y: 5,
        },
      ],
      position: 4,
    },
    {
      ...players.central1,
      from: initial_positions[4],
      to: {
        x: 10,
        y: 25,
      },
      animations: [
        {
          x: 10,
          y: 25,
        },
        {
          x: 45,
          y: 35,
        },
        {
          x: 50,
          y: 5,
        },
      ],
      position: 3,
    },
    {
      ...players.outside2,
      from: initial_positions[5],
      to: {
        x: 20,
        y: 67,
      },
      animations: [
        {
          x: 20,
          y: 67,
        },
        {
          x: 5,
          y: 35,
        },
        {
          x: 20,
          y: 5,
        },
        {
          x: 20,
          y: 5,
        },
      ],
      position: 2,
    },
  ],
};
const positions_5x1_receive_5 = {
  keyframes: 0,
  positions: [
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
      from: initial_positions[0],
      to: {
        x: 80,
        y: 67,
      },
      position: 1,
    },
    {
      ...players.oposite,
      from: initial_positions[1],
      to: {
        x: 60,
        y: 90,
      },
      position: 6,
    },
    {
      ...players.libero,
      from: initial_positions[2],
      to: {
        x: 50,
        y: 75,
      },
      position: 5,
    },
    {
      ...players.outside1,
      from: initial_positions[3],
      to: {
        x: 20,
        y: 67,
      },
      position: 4,
    },
    {
      ...players.setter,
      from: initial_positions[4],
      to: {
        x: 60,
        y: 10,
      },
      position: 3,
    },
    {
      ...players.central1,
      from: initial_positions[5],
      to: {
        x: 80,
        y: 15,
      },
      position: 2,
    },
  ],
};
const positions_5x1_receive_6 = {
  keyframes: 0,
  positions: [
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
      from: initial_positions[0],
      to: {
        x: 80,
        y: 67,
      },
      position: 1,
    },
    {
      ...players.outside2,
      from: initial_positions[1],
      to: {
        x: 50,
        y: 75,
      },
      position: 6,
    },
    {
      ...players.oposite,
      from: initial_positions[2],
      to: {
        x: 40,
        y: 90,
      },
      position: 5,
    },
    {
      ...players.central2,
      from: initial_positions[3],
      to: {
        x: 10,
        y: 15,
      },
      position: 4,
    },
    {
      ...players.outside1,
      from: initial_positions[4],
      to: {
        x: 20,
        y: 67,
      },
      position: 3,
    },
    {
      ...players.setter,
      from: initial_positions[5],
      to: {
        x: 60,
        y: 10,
      },
      position: 2,
    },
  ],
};

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

export const positions = {
  receive: positions_5x1_receive,
  serve: positions_5x1_serve,
};
