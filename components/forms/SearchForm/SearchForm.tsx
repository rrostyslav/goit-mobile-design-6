import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { SearchField } from "@/components/form-fields/SearchField"

type SearchFormProps = {
  onSearch: (value: string) => void
}

type SearchFormState = {
  searchLine: string
}

export const SearchForm = ({ onSearch }: SearchFormProps) => {
  const form = useForm<SearchFormState>({
    defaultValues: {
      searchLine: "",
    },
  })

  const handleSubmit: SubmitHandler<SearchFormState> = ({ searchLine }) => {
    onSearch(searchLine)
  }

  return (
    <FormProvider {...form}>
      <SearchField name="searchLine" onSubmitEditing={form.handleSubmit(handleSubmit)} />
    </FormProvider>
  )
}
