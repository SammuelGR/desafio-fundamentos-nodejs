import Transaction from '../models/Transaction';

interface Balance {
	income: number;
	outcome: number;
	total: number;
}

interface CreateTransactionDTIO {
	title: string;
	value: number;
	type: 'income' | 'outcome';
}

class TransactionsRepository {
	private transactions: Transaction[];

	constructor() {
		this.transactions = [];
	}

	public all(): Transaction[] {
		// TODO
	}

	public getBalance(): Balance {
		let incomes = 0;
		let outcomes = 0;

		this.transactions.forEach(transaction => {
			if (transaction.type === 'income') incomes += transaction.value;
			else outcomes += transaction.value;
		});

		const balance = {
			income: incomes,
			outcome: outcomes,
			total: incomes - outcomes,
		};

		return balance;
	}

	public create({ title, value, type }: CreateTransactionDTIO): Transaction {
		const transaction = new Transaction({ title, value, type });

		this.transactions.push(transaction);

		return transaction;
	}
}

export default TransactionsRepository;
