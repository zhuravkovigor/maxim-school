import { EventProps } from "../lib/types";

export default function EventComponent(props: EventProps) {
  const { done, id, title } = props;

  return `
    <div data-id="${id}" class="event-component bg-zinc-300 flex justify-between p-3 rounded-md">
      <h2>${title}</h2>
      ${
        done
          ? ""
          : `<button>
              <svg class="w-[24px]" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 12H18M18 12L13 7M18 12L13 17"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>`
      }
    </div>
  `;
}
