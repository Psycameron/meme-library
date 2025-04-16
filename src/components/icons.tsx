export const PencilIcon = ({ fill = "currentColor", size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    height={size}
    width={size}
    viewBox="0 0 24 24"
    stroke={fill}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);