import { ComponentPropsWithoutRef } from "react";

export default function ArrowLeft(
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#e4e7eb"
    >
      <path d="M560-280 360-480l200-200v400Z" />
    </svg>
  );
}
