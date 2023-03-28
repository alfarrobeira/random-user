export default function Address({ street, postcode, city, country }) {
    const styleObj = {
        fontSize: '1.1em'
    }
    return (
        <p style={styleObj}>
            <div>{street.name} {street.number}, {postcode} {city}</div> 
            <div>{country}</div></p>
    );
}