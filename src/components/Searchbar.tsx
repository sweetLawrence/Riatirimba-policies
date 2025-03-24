import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

// import { Text } from "@mantine/core";


interface SearchbarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function Searchbar({ value, onChange,onKeyDown }: SearchbarProps) {
  return (
    <TextInput
      placeholder="Search folders or files..."
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      leftSection={<IconSearch size={20} />}
      className="w-full max-w-md"
      radius="md"
      size="md"
    />
  
  );
}
