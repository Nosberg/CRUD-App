import './app-info.css';

const AppInfo = ({data}) => {
    const newData = data.filter(item => item.increase);
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании ООО "Водолей"</h1>
            <h2>Общее число сотрудников: {data.length}</h2>
            <h2>Премию получат: {newData.length} </h2>
        </div>
    );
}

export default AppInfo;