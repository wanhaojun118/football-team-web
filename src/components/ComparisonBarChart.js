import { Bar } from "react-chartjs-2";

const ComparisonBarChart = (props) => {
    return (
        <Bar
            className="comparison-bar-chart"
            height={100}
            width={150}
            type="radar"
            data={{
                labels: ["Appearences", "Goals", "Assists", "Saves", "Yellow Cards", "Red Cards"],
                datasets: [
                    {
                        label: props.firstPlayer.name,
                        data: [
                            props.firstPlayer.appearences || 0,
                            props.firstPlayer.goals || 0,
                            props.firstPlayer.assists || 0,
                            props.firstPlayer.saves || 0,
                            props.firstPlayer.yellowCards || 0,
                            props.firstPlayer.redCards || 0
                        ],
                        backgroundColor: "rgba(128, 0, 0, 0.5)",
                        borderColor: "#800000",
                        borderWidth: 2
                    },
                    {
                        label: props.secondPlayer.name,
                        data: [
                            props.secondPlayer.appearences || 0,
                            props.secondPlayer.goals || 0,
                            props.secondPlayer.assists || 0,
                            props.secondPlayer.saves || 0,
                            props.secondPlayer.yellowCards || 0,
                            props.secondPlayer.redCards || 0
                        ],
                        backgroundColor: "rgba(25, 25, 112, 0.5)",
                        borderColor: "#191970",
                        borderWidth: 2
                    }
                ]
            }}
            options={{
                plugins: {
                    decimation: {
                        enabled: true
                    },
                    legend: {
                        labels: {
                            font: {
                                size: 20
                            }
                        }
                    }
                },
                layout: {
                    padding: 30
                }
            }}
        />
    )
}

export default ComparisonBarChart;