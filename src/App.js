import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <p>CJ React Template</p>
      </header>
      <div className='main__content'>
        <p className='main__content_title text-3xl font-bold underline'>This contains a few things already:</p>
        <ul className='main__content__list'>
          <li className='main__content__list__item'>React</li>
          <li className='main__content__list__item'>TailwindCSS</li>
          <li className='main__content__list__item'>Dockerfiles for a environment</li>
          <li className='main__content__list__item'>.vscode Settings</li>
          <li className='main__content__list__item'>ESLint Setup</li>
          <li className='main__content__list__item'>.gitignore file</li>
          <li className='main__content__list__item'>Folder structure for Gatsby if needed</li>
          <li className='main__content__list__item'>We use Yarn</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
