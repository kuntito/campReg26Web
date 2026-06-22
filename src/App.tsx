import AppContent from './components/AppContent'
import AppShell from './components/AppShell'
import MobileFrame from './components/util/MobileFrame'

function App() {
  return (
    <AppShell>
        <MobileFrame>
            <AppContent />
        </MobileFrame>
    </AppShell>
  )
}

export default App