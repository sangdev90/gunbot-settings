{
	"pairs": {
		"poloniex": {
			"BTC_XMR": {
				"strategy": "bb",
				"override": {}
			}
		},
		"kraken": {
			"DASHEUR": {
				"strategy": "bb",
				"override": {}
			}
		},
		"bittrex": {
			"BTC-CVC": {
				"strategy": "bbgain",
				"override": {}
			},
			"BTC-EDG": {
				"strategy": "bbgain",
				"override": {}
			},
			"BTC-PART": {
				"strategy": "bb",
				"override": {}
			},
			"BTC-PAY": {
				"strategy": "bbgain",
				"override": {}
			},
			"BTC-DCT": {
				"strategy": "bbgain",
				"override": {}
			},
			"BTC-RLC": {
				"strategy": "bbgain",
				"override": {}
			},
			"BTC-XEL": {
				"strategy": "bbgain",
				"override": {}
			},
			"BTC-BAT": {
				"strategy": "bbgain",
				"override": {}
			},
			"BTC-ADX": {
				"strategy": "bb",
				"override": {}
			},
			"BTC-SAFEX": {
				"strategy": "bb",
				"override": {}
			},
			"BTC-QWARK": {
				"strategy": "bbgain",
				"override": {}
			}
		}
	},

	"exchanges": {
		"poloniex": {
			"key": "",
			"secret": ""
		},
		"kraken": {
			"key": "",
			"secret": ""
		},
		"bittrex": {
			"key": "",
			"secret": ""
		}
	},

	"bot": {
		"debug": false,

		"period_storage_ticker": 300,
		"interval_ticker_update": 10000,

		"timeout_buy": 60000,
		"timeout_sell": 60000,

		"MIN_VOLUME_TO_BUY": 0.0005,

		"WATCH_MODE": false
	},

	"strategies": {
		"bb": {
			"BTC_TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"GAIN": 0.6,
			"HIGH_BB": 60,
			"LOW_BB": -10,
			"PANIC_SELL": false,
			"DOUBLE_UP": false
		},
		"bbgain": {
			"BTC_TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"GAIN": 1,
			"LOW_BB": -10,
			"EMA1": 200,
			"EMA2": 50,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001	
		}
	},

	"optionals": {
		"toOverride": {
			"BOUGHT_PRICE": 0.104744
		}
	}


}