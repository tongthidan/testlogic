#include<bits/stdc++.h>
#include<math.h>
using namespace std;

main(){
	int t;
	cin>>t;
	while(t--){
		long long n;
	cin>>n;
	int dem = 0;
	
	for(int i = 1; i < sqrt(n); i++){
		if( n% i == 0){
			if(i % 2 == 0){
				dem++;
			}
			if( (n/i) % 2 == 0){
				dem++;
			}
		}
	}
	long s = sqrt(n);
	if(s * s == n){
		if( s % 2 == 0){
			dem++;
		}
	}
	cout<<dem<<endl;

	}
	
	return 0;
}

