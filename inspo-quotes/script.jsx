import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export const ApiData = () => {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        fetch('https://zenquotes.io/api/quotes')
        .then(res => res.json())
        .then(json => setData(json.slice(0,3)))
        .catch(err => console.error(err))
    }, []);

    return(
        <View>
            {data.map(item => (
                <View>
                <Text key={item.id}>"{item.q}"</Text>
                <Text>By {item.a}</Text>
                </View>
            ))}
        </View>
    )
}