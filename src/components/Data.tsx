import { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native"
import flatpickr from 'flatpickr';
import { useEffect, useRef, useState } from 'react';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';



type Props = {
    children: ReactNode;
    onDateChange?: (date: Date) => void;
};
export default function Data({ children, onDateChange }: Props) {
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date());

   // Срабатывает, когда пользователь выбрал дату
    const handleValueChange = (event: any, selectedDate?: Date) => {
        setShow(false); // Закрываем календарь
        if (selectedDate) {
            setDate(selectedDate);
            if (onDateChange) {
                onDateChange(selectedDate);
            }
        }
    };

    // Срабатывает, если пользователь закрыл / отменил выбор
    const handleDismiss = () => {
        setShow(false);
    };
    return (<View>
        <Text onPress={() => setShow(true)} style={styles.text}>{children}</Text>
        {show && (
            <DateTimePicker
                value={date}
                mode="date"
                display="default"
               onValueChange={handleValueChange}
                    onDismiss={handleDismiss}
            />
        )}
    </View>)
};

    const styles = StyleSheet.create({
        text: {
            fontSize: 30,
        },
    })