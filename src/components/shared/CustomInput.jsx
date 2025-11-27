import { useState, useEffect } from "react";

export default function CustomInput({
  variant,
  label,
  id,
  type,
  children,
  value,
  onFocus,
  onBlur,
  ...props
}) {
  const isTextarea = type === "textarea";

  // Logic for date input placeholder on mobile
  // If it's a date input and empty, start as text to show placeholder
  const [inputType, setInputType] = useState(
    type === "date" && !value ? "text" : type
  );

  useEffect(() => {
    // If it's a date input and has a value, ensure it's type='date'
    if (type === "date" && value) {
      setInputType("date");
    }
    // If it's a date input, has no value, and is NOT focused, switch to text to show placeholder
    if (type === "date" && !value && document.activeElement.id !== id) {
      setInputType("text");
    }
  }, [value, type, id]);

  const handleFocus = (e) => {
    if (type === "date") {
      // Directly switch type to date to allow immediate picker triggering
      e.target.type = "date";
      // Try to open the picker immediately
      try {
        if (e.target.showPicker) {
          e.target.showPicker();
        }
      } catch (err) {
        console.warn("Failed to show picker:", err);
      }
      // Update state to match
      setInputType("date");
    }
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e) => {
    if (type === "date" && !e.target.value) {
      setInputType("text");
    }
    if (onBlur) onBlur(e);
  };

  const placeholder = children || (type === "date" ? "dd/mm/yyyy" : undefined);

  return (
    <>
      <div className="flex w-full flex-col gap-[1rem]">
        {variant === "default" ? (
          <label htmlFor={id} className="block text-xl font-bold">
            {label}
          </label>
        ) : variant === "largeDefault" ? (
          <label
            htmlFor={id}
            className="block text-2xl font-bold text-[color:var(--emphasis)]"
          >
            {label}
          </label>
        ) : (
          <label
            htmlFor={id}
            className="block text-xl font-bold text-[color:var(--emphasis)]"
          >
            {label}
          </label>
        )}
        {isTextarea ? (
          <textarea
            id={id}
            className="w-full text-lg focus:outline-none focus:ring-0 border-b border-b-[color:var(--text-color)]/50 resize-none"
            placeholder={placeholder}
            style={{
              verticalAlign: "top",
              height: "10rem",
              border: "1px solid var(--text-color)",
              padding: "1rem",
            }}
            value={value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
        ) : (
          <input
            type={inputType}
            id={id}
            className="w-full text-lg focus:outline-none focus:ring-0 border-b border-b-[color:var(--text-color)]/50"
            placeholder={placeholder}
            value={value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
        )}
      </div>
    </>
  );
}
