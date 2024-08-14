export default function Content(){
    return(
        <div className="contents">
            <div className="table">
            <table>
                <tr>
                    <th>Comapy</th>
                    <th>Laptop Name</th>
                    <th>Ram</th>
                    <th>Storage</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>Acer</td>
                    <td>Predator</td>
                    <td>16GB</td>
                    <td>1TB SSD</td>
                    <td>1,15,000</td>
                </tr>
                <tr>
                    <td>Lenovo</td>
                    <td>Ideapad Gaming</td>
                    <td>8GB</td>
                    <td>512GB SSD</td>
                    <td>52,000</td>
                </tr>
                <tr>
                    <td>Hp</td>
                    <td>Pavilion</td>
                    <td>8GB</td>
                    <td>512GB SDD</td>
                    <td>60,0000</td>
                </tr>
                <tr>
                    <td>Asus</td>
                    <td>ROG</td>
                    <td>16GB</td>
                    <td>1TB SSD</td>
                    <td>88,000</td>
                </tr>
            </table>
        </div>
        <div className="form">
        <form>
            <div className="content">
            <h1>
                ContactUs
            </h1>
            <div id="con">
            <legend for="fname">First name:</legend>
            <input type="text" id="fname" name="fname"></input>
            <legend id="email">Email:</legend>
            <input type="email"></input>
            </div>
            <button>Submit</button>
            </div>
        </form>
        </div>
        </div>
        
    );
}