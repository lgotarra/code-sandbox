export type TextInputProps = {
  text: string;
  onChange: (text: string) => void;
};
export const TextInput = ({
  text,
  onChange,
}: TextInputProps): React.JSX.Element => {
  return (
    <input
      type="text"
      value={text}
      onChange={(e) => onChange(e.target.value)}
      style={{ border: "1px solid black", padding: "8px", width: "100%", boxSizing: "border-box", borderRadius: "4px" }}
      placeholder="Enter new task"
    />
  );
};
