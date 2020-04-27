import api from './index';

export const addPayment = (billId, userId) => {
	return api.post(`v1/bill/${billId}/payment/${userId}`, {billId,userId})
}

export const createBill = (name, amount, month) => {
	return api.post('v1/bill', {name,amount,month})
}

export const deleteBill = (billId) => {
	return api.delete(`v1/bill/${billId}`, {billId})
}

export const deletePayment = (billId,userId) => {
	return api.delete(`v1/bill/${billId}/payment/${userId}`, {billId,userId})
}

export const editBill = (billId, name, amount, month) => {
	return api.put(`v1/bill/${billId}`, {billId, name, amount, month})
}

export const getAllBills = () => {
	return api.get('v1/bill')
}

export const getBillById = (billId) => {
	return api.get(`v1/bill/${billId}`, {billId})
}
