export const PencilIcon = ({
  fill = "none",
  stroke = "currentColor",
  size = 24,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    height={size}
    width={size}
    viewBox="0 0 24 24"
    stroke={stroke}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);

export const LikeIcon = ({
  fill = "none",
  stroke = "currentColor",
  size = 24,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    height={size}
    width={size}
    viewBox="0 0 24 24"
    stroke={stroke}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    className=""
  >
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
        2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 
        4.5 2.09C13.09 3.81 14.76 3 16.5 3 
        19.58 3 22 5.42 22 8.5c0 3.78-3.4 
        6.86-8.55 11.54L12 21.35z"
    />
  </svg>
);
