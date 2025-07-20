import { TextInput } from '@mantine/core';
import { FaSearch } from 'react-icons/fa'; // Importing from react-icons

interface SearchbarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function Searchbar({ value, onChange, onKeyDown }: SearchbarProps) {
  return (
    <TextInput
      placeholder="Search folders or files..."
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      leftSection={<FaSearch size={16} />} // Adjust size as needed
      className="w-full max-w-md"
      radius="md"
      size="md"
    />
  );
}

