import { useAccordionContext } from "./Accordion"

export default function AccordionTitle({ id, className, children }) {
  const { toggleItem } = useAccordionContext()

  function handleClick() {
    toggleItem(id)
  }

  return (
    <h3 onClick={handleClick} className={className}>{children}</h3>

  )
}