

import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, Select } from "@mui/material";
import React from "react";

const Dropdown = ({ 
    label, 
    id, 
    value, 
    handleChange, 
    name, 
    options, 
    multiple = false 
}) => {
    // Ensure value is properly initialized
    const selectedValue = multiple ? (Array.isArray(value) ? value : []) : (value || "");

    const renderValue = (selected) => {
        if (!selected) return ""; // Return empty string if undefined or null
        if (multiple && Array.isArray(selected)) {
            return selected.length > 0 ? selected.join(", ") : ""; // Join selected items
        }
        return selected; // Return as-is for single select
    };

    return (
        <FormControl fullWidth>
            <InputLabel id={id}>{label}</InputLabel>
            <Select
                labelId={id}
                id={`${id}-select`}
                value={selectedValue}
                onChange={handleChange}
                name={name}
                multiple={multiple}
                renderValue={renderValue}
            >
                {options.map((option, index) => (
                    <MenuItem key={index} value={option}>
                        {multiple ? (
                            <>
                                <Checkbox 
                                    checked={Array.isArray(selectedValue) && 
                                        selectedValue.includes(option)}
                                />
                                <ListItemText primary={option} />
                            </>
                        ) : (
                            option
                        )}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default Dropdown;
