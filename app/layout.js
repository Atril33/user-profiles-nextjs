import './globals.css';

export const metadata = {
  title: 'User Profiles',
  description: 'A simple user profiles app',
}

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
      { children }
      </body>
    </html>
   
  )
}

export default RootLayout;
