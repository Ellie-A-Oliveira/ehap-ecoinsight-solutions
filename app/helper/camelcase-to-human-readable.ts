export default function camelCaseToHumanReadable(camelCaseStr: string): string {
    return camelCaseStr
        .replace(/([A-Z])/g, " $1")  // Add a space before each uppercase letter
        .replace(/^./, str => str.toUpperCase());  // Capitalize the first letter
}