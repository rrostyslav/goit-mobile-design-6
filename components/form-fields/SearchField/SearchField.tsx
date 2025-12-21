import { SearchInput, SearchInputProps } from "@/components/common/SearchInput"
import { Controller, useFormContext } from "react-hook-form"

type SearchFieldProps = {
  name: string
} & Pick<SearchInputProps, "onSubmitEditing">

export const SearchField = ({ name, onSubmitEditing }: SearchFieldProps) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <SearchInput onBlur={onBlur} onChangeText={onChange} value={value} onSubmitEditing={onSubmitEditing} />
      )}
      name={name}
    />
  )
}
