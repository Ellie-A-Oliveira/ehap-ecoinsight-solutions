interface FormInputProps {
    name: string
    label: string
    type: string
    placeholder: string
    required?: boolean
}

export const FormInput = ({ name, label, type, placeholder, required }: FormInputProps) => {
    return (
        <>
        <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor={name}
        >
            {label}
        </label>
        <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id={name}
            type={type}
            placeholder={placeholder}
            required={required}
        />
        </>
    )
}