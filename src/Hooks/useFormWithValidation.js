import React, { useCallback } from "react";

export function useFormWithValidation() {
    const [values, setValues] = React.useState({
        email: "",
        password: "",
        name: ""
    });
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        const validationMessage = target.validationMessage;

        setValues((prevValues) => ({ ...prevValues, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: validationMessage }));
        setIsValid(target.closest("form").checkValidity());
    };

    const resetForm = useCallback(
        (newValues = { email: "", password: "", name: "" }, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    return { values, handleChange, setValues, resetForm, errors, isValid };
}
