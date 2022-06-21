import './App.css'
import Header from './components/Header/Header'
import { Routes, Route, Navigate } from 'react-router-dom'
import Policies from './components/Policies/Policies'
import General from './components/Policies/General'
import OnlineOrdering from './components/Policies/OnlineOrdering'
import ZomatoDining from './components/Policies/ZomatoDining'
import InstantFood from './components/Policies/InstantFood'
import ZPL from './components/Policies/ZPL'
import GuidelinesAndPolicies from './components/Policies/GuidelinesAndPolicies'
import PrivacyPolicy from './components/Policies/PrivacyPolicy'
import TermsofService from './components/Policies/TermsofService'
import ApiPolicy from './components/Policies/ApiPolicy'
import CSR from './components/Policies/CSR'
import LicenceAndRegistraion from './components/Policies/LicenceAndRegistraion'
import Security from './components/Policies/Security'
function App() {
  return (
    <div className="content">
      <Routes>
        <Route path="/*" element={<Header />} />

        <Route path="/policies/*" element={<Policies />}>
          <Route path="general/*" element={<General />}>
            <Route
              path="guidelines-policies"
              element={<GuidelinesAndPolicies />}
            />
            <Route
              path=""
              element={<Navigate replace to="guidelines-policies" />}
            />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-of-service" element={<TermsofService />} />
            <Route path="api-policy" element={<ApiPolicy />} />
            <Route path="csr" element={<CSR />} />
            <Route
              path="licence-and-registration"
              element={<LicenceAndRegistraion />}
            />
            <Route path="security" element={<Security />} />
          </Route>

          <Route path="" element={<Navigate replace to="general" />} />
          <Route path="online-ordering/*" element={<OnlineOrdering />} />
          <Route path="zomato-dining/*" element={<ZomatoDining />} />
          <Route path="instant-food/*" element={<InstantFood />} />
          <Route path="zpl/*" element={<ZPL />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
