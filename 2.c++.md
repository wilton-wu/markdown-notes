# 一.pat乙级题解

- [题目地址](https://pintia.cn/problem-sets/994805260223102976/problems)
- 编辑器：CLion
  
## 1001 害死人不偿命的(3n+1)猜想

```
#include<iostream>
using namespace std;

int main() {
    int n,count=0;
    cin>>n;
    while(n!=1){
        if(n%2==0) n/=2;
        else n=(3*n+1)/2;
        count++;
    }
    cout<<count<<endl;
    return 0;
}
```

## 1002 写出这个数

```
#include<iostream>
#include<vector>
#include<string>
using namespace std;

int main() {
    string n;
    cin>>n;
    int sum=0;
    for(int i=0;i<n.size();i++)
        sum+=n[i]-'0';
    vector<int> v;
    while(sum){
        v.push_back(sum%10);
        sum/=10;
    }
    string arr[10]={"ling","yi","er","san","si","wu","liu","qi","ba","jiu"};
    for(long j=v.size()-1;j>=0;j--){
        if(j==0) cout<<arr[v[j]];
        else cout<<arr[v[j]]<<' ';
    }
    cout<<endl;
    return 0;
}
```

## 1003 我要通过！

```
#include<iostream>
#include<string>
#include<map>
using namespace std;

int main() {
    int n,p=0,t=0;
    string s;
    cin>>n;
    for(int i=0;i<n;i++){
        cin>>s;
        map<char,int> m;
        for(int j=0;j<s.size();j++){
            m[s[j]]++;
            if(s[j]=='P') p=j;
            if(s[j]=='T') t=j;
        }
        if(m['P']==1&&m['A']!=0&&m['T']==1&&m.size()==3&&t-p!=1&&p*(t-p-1)==s.size()-t-1)
            cout<<"YES"<<endl;
        else
            cout<<"NO"<<endl;
    }
    return 0;
}
```

## 1004 成绩排名

```
#include<iostream>
#include<string>
using namespace std;

int main() {
    int n;
    cin>>n;
    string name[n],num[n];
    int score[n];
    for(int i=0;i<n;i++){
        cin>>name[i]>>num[i]>>score[i];
    }
    int max=score[0];
    int min=score[0];
    int maxi=0,mini=0;
    for(int j=1;j<n;j++){
        if(max<score[j]){
            max=score[j];
            maxi=j;
        }
        if(min>score[j]){
            min=score[j];
            mini=j;
        }
    }
    cout<<name[maxi]<<' '<<num[maxi]<<endl;
    cout<<name[mini]<<' '<<num[mini]<<endl;
    return 0;
}
```

## 1005 继续(3n+1)猜想

```
#include<iostream>
#include<string>
#include<vector>
using namespace std;

bool cmp(int a,int b){
    return a>b;
}

int main() {
    int n;
    cin>>n;
    int arr[n],copyArr[n];
    for(int i=0;i<n;i++){
        cin>>arr[i];
        copyArr[i]=arr[i];
    }
    int hash[1000]={0};
    for(int j=0;j<n;j++){
        while(arr[j]!=1){
            if(arr[j]%2==0) arr[j]/=2;
            else arr[j]=(3*arr[j]+1)/2;
            hash[arr[j]]=1;
        }
    }
    vector<int> v;
    for(int k=0;k<n;k++)
        if(hash[copyArr[k]]!=1)
            v.push_back(copyArr[k]);
    sort(v.begin(),v.end(),cmp);
    for(int l=0;l<v.size();l++){
        if(l==v.size()-1) cout<<v[l];
        else cout<<v[l]<<' ';
    }
    cout<<endl;
    return 0;
}
```

## 1006 换个格式输出整数

```
#include<iostream>
using namespace std;

int main() {
    int n;
    cin>>n;
    int a,b,c;
    a=n/100;
    b=(n-a*100)/10;
    c=n%10;
    while(a--) cout<<'B';
    while(b--) cout<<'S';
    for(int i=1;i<=c;i++)
        cout<<i;
    cout<<endl;
    return 0;
}
```

## 1007 素数对猜想

```
#include<iostream>
#include<vector>
using namespace std;

bool isPrim(int n){
    for(int i=2;i*i<=n;i++)
        if(n%i==0)
            return false;
    return true;
}

int main() {
    int n;
    cin>>n;
    vector<int> v;
    for(int i=2;i<n;i++){
        if(isPrim(i)) v.push_back(i);
    }
    int count=0;
    for(int j=0;j<v.size()-1;j++)
        if(v[j+1]-v[j]==2)
            count++;
    cout<<count<<endl;
    return 0;
}
```

## 1008 数组元素循环右移问题 

```
#include<iostream>
using namespace std;

int main() {
    int n,m;
    cin>>n>>m;
    int arr[n];
    for(int i=0;i<n;i++)
        cin>>arr[i];
    for(int j=n-m;j<n;j++)
        cout<<arr[j]<<' ';
    for(int k=0;k<n-m;k++){
        if(k==n-m-1) cout<<arr[n-m-1];
        else cout<<arr[k]<<' ';
    }
    cout<<endl;
    return 0;
}
```

## 1009 说反话

```
#include<iostream>
#include<string>
#include<algorithm>
using namespace std;

int main() {
    string s;
    getline(cin,s);
    reverse(s.begin(),s.end());
    int temp=0;
    for(int i=0;i<s.size();i++){
        if(s[i]==' '){
            for(int j=i-1;j>=temp;j--)
                cout<<s[j];
            temp=i+1;
            cout<<' ';
        }
        if(i==s.size()-1)
            for(int k=i;k>=temp;k--)
                cout<<s[k];
    }
    cout<<endl;
    return 0;
}
```

## 1010 一元多项式求导

```
#include<iostream>
using namespace std;
int main()
{
    int a,b;
    int x=1;
    while(cin>>a>>b){
        if(b==0) break;
        if(!x)
            cout<<" ";
        else
            x=0;
        cout<<a*b<<" "<<b-1;
    }
    if(x)
        cout<<"0 0";
    return 0;
}
```

## 1011 A+B和C

```
#include<iostream>
using namespace std;

int main() {
    int n;
    cin>>n;
    int count=1;
    long a[n],b[n],c[n];
    for(int i=0;i<n;i++)
        cin>>a[i]>>b[i]>>c[i];
    for(int j=0;j<n;j++){
        if(a[j]+b[j]>c[j])
            cout<<"Case #"<<count<<": true"<<endl;
        else
            cout<<"Case #"<<count<<": false"<<endl;
        count++;
    }
    return 0;
}
```

## 1012 数字分类

```
#include<iostream>
#include<vector>
#include<iomanip>
using namespace std;

int main() {
    int n;
    cin>>n;
    int temp;
    vector<int> v1,v2,v3,v4,v5;
    for(int i=0;i<n;i++){
        cin>>temp;
        if(temp%5==0) v1.push_back(temp);
        if(temp%5==1) v2.push_back(temp);
        if(temp%5==2) v3.push_back(temp);
        if(temp%5==3) v4.push_back(temp);
        if(temp%5==4) v5.push_back(temp);
    }
    int a1=0,a2=0,a5=0;
    long a3=0;
    float a4=0;
    for(int i=0;i<v1.size();i++){
        if(v1[i]%2==0) a1+=v1[i];
    }
    for(int i=0;i<v2.size();i++){
        if(i%2==0) a2+=v2[i];
        else a2-=v2[i];
    }
    a3=v3.size();
    for(int i=0;i<v4.size();i++){
        a4+=v4[i];
    }
    for(int i=0;i<v5.size();i++)
        if(a5<v5[i]) a5=v5[i];
    cout<<a1<<' '<<a2<<' '<<a3<<' '<<fixed<<setprecision(1)<<a4/v4.size()<<' '<<a5<<endl;
    return 0;
}
```

## 1013 数素数

```
#include<iostream>
#include<vector>
using namespace std;

bool isPrim(int n){
    for(int i=2;i*i<=n;i++)
        if(n%i==0)
            return false;
    return true;
}

int main() {
    int m,n;
    cin>>m>>n;
    vector<int> v;
    int i=2,count=0;
    bool flag=true;
    while(flag){
        if(isPrim(i)) {
            count++;
            if(count>=m&&count<=n)
                v.push_back(i);
            if(count==n)
                flag=false;
        }
        i++;
    }
    int temp=0;
    for(int j=0;j<v.size();j++){
        temp++;
        if(temp%10==0)
            cout<<v[j]<<endl;
        else
            cout<<v[j]<<' ';
    }
    cout<<endl;
    return 0;
}
```

## 1014 福尔摩斯的约会

```
#include<iostream>
#include<string>
#include<iomanip>
using namespace std;

int main(){
    string s1,s2,s3,s4;
    char a,hour;
    int count=0;
    cin>>s1>>s2>>s3>>s4;
    for(int i=0;i<s1.size();i++){
        if(count==0&&s1[i]==s2[i]&&s1[i]>='A'&&s1[i]<='G'){
            a=s1[i];
            count++;
            i++;
        }
        if(count==1&&s1[i]==s2[i]&&s1[i]>='A'&&s1[i]<='N'){
            hour=s1[i];
            count++;
        }
        if(count==1&&s1[i]==s2[i]&&s1[i]>='0'&&s1[i]<='9'){
            hour=s1[i];
            count++;
        }
        if(count==2) break;
    }
    int minute=0;
    for(int j=0;j<s3.size();j++)
        if(s3[j]==s4[j]&&s3[j]>='a'&&s3[j]<='z'){
            minute=j;
            break;
        }
    string week[7]={"MON","TUE","WED","THU","FRI","SAT","SUN"};
    cout<<week[a-'A']<<' '<<setw(2)<<setfill('0')<<hour-'A'+10<<':'<<setw(2)<<setfill('0')<<minute<<endl;
    return 0;
}
```

## 1015 德才论

```
#include<iostream>
#include<algorithm>
#include<vector>
using namespace std;

struct student{
    int no, a, b, sum, level;
    bool operator<(const student& l)const
    {
        if (level != l.level)
            return level > l.level;
        else if (sum != l.sum)
            return sum < l.sum;
        else if (a != l.a)
            return l.a>a;
        else
            return no > l.no;
    }
};

int main()
{
    int n, l, h, cnt = 0, no, a, b, sum;
    vector<student>  vs;
    cin >> n >> l >> h;
    for (int i = 0; i != n;i++)
    {
        cin >> no >> a >> b;
        sum = a + b;
        if (a < l || b < l)
        {
            cnt++;
            continue;
        }
        else if (a >= h&&b >= h)
        {
            vs.push_back({ no,a,b,sum,1 });
        }
        else if (a >= h)
        {
            vs.push_back({ no,a,b,sum,2 });
        }
        else if (a >= b)
        {
            vs.push_back({ no,a,b,sum,3 });
        }
        else {
            vs.push_back({ no,a,b,sum,4 });
        }
    }
    sort(vs.begin(), vs.end());
    cout << n - cnt << endl;
    for (auto it = vs.rbegin(); it != vs.rend(); it++)
        cout << it->no << " " << it->a << " " << it->b << endl;
    return 0;
}
```

## 1016 部分A+B

```
#include<iostream>
using namespace std;

int main() {
    char a[10],b[10];
    char da,db;
    cin>>a>>da>>b>>db;
    int count1=0,count2=0;
    for(int i=0;i<10;i++){
        if(a[i]==da) count1++;
        if(b[i]==db) count2++;
    }
    int pa=0,pb=0;
    while(count1){
        pa=pa*10+da-'0';
        count1--;
    }
    while(count2){
        pb=pb*10+db-'0';
        count2--;
    }
    cout<<pa+pb<<endl;
    return 0;
}
```

## 1017 A除以B

```
#include<iostream>
#include<string>
using namespace std;

int main(){
    string a;
    int b;
    cin>>a>>b;
    long len=a.size();
    int t=0;
    int temp=0;
    t=(a[0]-'0')/b;
    if((t!=0&&len>1)||len==1){
        cout<<t;
    }
    temp=(a[0]-'0')%b;
    for(int i=1;i<len;i++){
        t=(temp*10+a[i]-'0')/b;
        cout<<t;
        temp=(temp*10+a[i]-'0')%b;
    }
    cout<<" "<<temp<<endl;
    return 0;
}
```

## 1018 锤子剪刀布

```
#include<iostream>
#include<string>
using namespace std;

int main(){
    int n;
    cin>>n;
    string a,b;
    int ac=0,aj=0,ab=0,bc=0,bj=0,bb=0;
    int count[3]={0};
    while(n--){
        cin>>a>>b;
        if(a+b=="CJ"||a+b=="JB"||a+b=="BC") count[0]++;
        else if(a==b) count[2]++;
        else count[1]++;
        if(a+b=="CJ") ac++;
        if(a+b=="JB") aj++;
        if(a+b=="BC") ab++;
        if(a+b=="JC") bc++;
        if(a+b=="BJ") bj++;
        if(a+b=="CB") bb++;
    }
    cout<<count[0]<<' '<<count[2]<<' '<<count[1]<<endl;
    cout<<count[1]<<' '<<count[2]<<' '<<count[0]<<endl;
    if(ab>=ac&&ab>=aj) cout<<'B'<<' ';
    else if(ac>ab&&ac>=aj) cout<<'C'<<' ';
    else cout<<'J'<<' ';
    if(bb>=bc&&bb>=bj) cout<<'B'<<endl;
    else if(bc>bb&&bc>=bj) cout<<'C'<<endl;
    else cout<<'J'<<endl;
    return 0;
}
```

## 1019 数字黑洞

```
#include<iostream>
#include<algorithm>
#include<string>
#include<iomanip>
using namespace std;

int main(){
    string n;
    cin>>n;
    int arr[4];
    for(int i=0;i<4;i++)
        arr[i]=n[i]-'0';
    int sum=0;
    if(arr[0]==arr[1]&&arr[1]==arr[2]&&arr[2]==arr[3])
        cout<<arr[0]*1111<<" - "<<arr[0]*1111<<" = "<<"0000"<<endl;
    else{
        while(sum!=6174){
            sort(arr,arr+4);
            int first=arr[3]*1000+arr[2]*100+arr[1]*10+arr[0];
            int second=arr[0]*1000+arr[1]*100+arr[2]*10+arr[3];
            sum=first-second;
            int temp=sum;
            for(int j=0;j<4;j++){
                arr[j]=temp%10;
                temp/=10;
            }
            cout<<setw(4)<<setfill('0')<<first<<" - "<<setw(4)<<setfill('0')<<second<<" = "<<setw(4)<<setfill('0')<<sum<<endl;
        }
    }
    return 0;
}
```

## 1020 月饼

```
#include<iostream>
#include<iomanip>
using namespace std;

int main(){
    int n,d;
    cin>>n>>d;
    float num[n],price[n];
    for(int i=0;i<n;i++)
        cin>>num[i];
    for(int j=0;j<n;j++)
        cin>>price[j];
    float average[n];
    for(int k=0;k<n;k++)
        average[k]=price[k]/num[k];
    float money=0;
    if(d<=15) money=d*average[1];
    else if(15<d&&d<=25) money=72+(d-15)*average[2];
    else if(25<d&&d<=43) money=72+45+(d-25)*average[0];
    else money=75+72+45;
    cout<<fixed<<setprecision(2)<<money<<endl;
    return 0;
}
```

## 1021 个位数统计

```
#include<iostream>
using namespace std;

int main(){
    int hash[10]={0};
    int n;
    cin>>n;
    while(n){
        hash[n%10]++;
        n/=10;
    }
    for(int i=0;i<10;i++)
        if(hash[i]!=0)
            cout<<i<<':'<<hash[i]<<endl;
    return 0;
}
```

## 1022 D进制的A+B

```
#include<iostream>
#include<vector>
using namespace std;

int main(){
    int a,b,d;
    cin>>a>>b>>d;
    int c=a+b;
    vector<int> v;
    while(c){
        v.push_back(c%8);
        c/=8;
    }
    for(long i=v.size()-1;i>=0;i--)
        cout<<v[i];
    cout<<endl;
    
    return 0;
}
```

## 1023 组个最小数

```
#include<iostream>
using namespace std;

int main(){
    int hash[10];
    for(int i=0;i<10;i++)
        cin>>hash[i];
    for(int j=1;j<10;j++)
        if(hash[j]!=0){
            cout<<j;
            hash[j]--;
            break;
        }
    for(int k=0;k<10;k++){
        for(int l=0;l<hash[k];l++)
            cout<<k;
    }
    return 0;
}
```

## 1024 科学计数法

```
#include<iostream>
#include<string>
#include<vector>
using namespace std;

int main(){
    string s;
    cin>>s;
    vector<char> v;
    for(int i=0;i<s.size();i++){
        if(s[i]>='0'&&s[i]<='9')
            v.push_back(s[i]);
        if(s[i]=='E')
            break;
    }
    char arr[4];
    arr[0]=s[0];
    arr[1]=s[s.size()-3];
    arr[2]=s[s.size()-2];
    arr[3]=s[s.size()-1];
    int temp=(arr[2]-'0')*10+arr[3]-'0';
    if(arr[0]=='-') cout<<'-';
    if(arr[1]=='-'){
        cout<<"0.";
        for(int j=1;j<temp;j++)
            cout<<'0';
        for(int k=0;k<v.size();k++)
            cout<<v[k];
    }
    if(arr[1]=='+'){
        for(int j=0;j<v.size();j++)
            cout<<v[j];
        for(int k=0;k<temp-v.size()+1;k++)
            cout<<'0';
    }
    return 0;
}
```

## 1025 反转链表

```
#include<iostream>
#include<cstdio>
#include<algorithm>
#include<vector>
using namespace std;
struct Node{
    int address;
    int data;
    int next;
};
int main(){
    int N,first,K;
    vector<Node> shunxu;
    vector<Node> reverse;
    cin>>first>>N>>K;
    Node n;
    Node addr[100000];      //链表数组
    for(int i=0;i<N;i++){
        cin>>n.address>>n.data>>n.next;
        addr[n.address]=n;  //将节点赋值到相应下标的位置
    }
    int nextaddress=first;
    while (nextaddress != -1){  //通过next作为下标寻找元素，添加到vector中，更新next继续寻找
        shunxu.push_back(addr[nextaddress]);
        nextaddress = addr[nextaddress].next;
    }
    int size=shunxu.size(); //输入的节点可能有些不在链表中，记录下链表的长度
    int temp=K-1;
    while(temp<size){       //反转链表，每次翻转K个，不足K个不反转并退出循环
        for(int i=temp;i>temp-K;i--){
            reverse.push_back(shunxu[i]);
        }
        temp+=K;
    }
    for(int i=temp-K+1;i<size;i++)//将最后没有反转的，复制到反转之后的链表
        reverse.push_back(shunxu[i]);
    for(int i=0;i<size-1;i++){      //修改他们的next，改为下一个元素的address
        reverse[i].next=reverse[i+1].address;
        printf("%05d %d %05d\n",reverse[i].address,reverse[i].data,reverse[i].next);
    }
    printf("%05d %d %d\n",reverse[size-1].address,reverse[size-1].data,-1);

    return 0;
}
```

## 1026 程序运行时间

```
#include<iostream>
#include<cmath>
#include<cstdio>
using namespace std;

int main(){
    float c1,c2;
    cin>>c1>>c2;
    float t=c2-c1;
    int temp=round((c2-c1)/100);
    int hour=0,minute=0,second=0;
    hour=temp/3600;
    minute=(temp-hour*3600)/60;
    second=temp%60;
    printf("%02d:%02d:%02d",hour,minute,second);
    return 0;
}
```

## 1027 打印沙漏

```
#include<iostream>
#include<string>
using namespace std;

int main(){
    int n;
    char c;
    cin>>n>>c;
    int h=0;
    while(2*h*h-1<=n)
        h++;
    h--;
    for(int i=1;i<=h;i++){
        for(int j=1;j<=(i-1);j++)
            cout<<' ';
        for(int k=1;k<=(2*h-2*i+1);k++)
            cout<<c;
        cout<<endl;
    }
    for(int i=2;i<=h;i++){
        for(int j=1;j<=h-i;j++)
            cout<<' ';
        for(int k=1;k<=(2*i-1);k++)
            cout<<c;
        cout<<endl;
    }
    cout<<n-2*h*h+1<<endl;
    return  0;
}
```

## 1028 人口普查

```
#include<iostream>
#include<string>
using namespace std;

int main(){
    int n;
    cin>>n;
    string name[n],birthday[n];
    int num[n];
    for(int i=0;i<n;i++){
        cin>>name[i]>>birthday[i];
        num[i]=(birthday[i][0]-'0')*10000000+(birthday[i][1]-'0')*1000000+(birthday[i][2]-'0')*100000+(birthday[i][3]-'0')*10000+(birthday[i][5]-'0')*1000+(birthday[i][6]-'0')*100+(birthday[i][8]-'0')*10+birthday[i][9]-'0';
    }
    int count=0,old=20140906,young=18140906,oldj=0,youngj=0;
    for(int j=0;j<n;j++){
        if(num[j]<=20140906&&num[j]>=18140906){
            if(young<num[j]){
                young=num[j];
                youngj=j;
            }
            if(old>num[j]){
                old=num[j];
                oldj=j;
            }
            count++;
        }
    }
    cout<<count<<' '<<name[oldj]<<' '<<name[youngj]<<endl;
    return 0;
}
```

## 1029 旧键盘

```
#include<iostream>
#include<string>
#include<unordered_set>
#include<vector>
using namespace std;

int main(){
    string s1,s2;
    cin>>s1>>s2;
    unordered_set<char> s;
    int i=0,j=0;
    while(i<s1.size()){
        if(s1[i]!=s2[j]){
            if(s1[i]>='a'&&s1[i]<='z'){
                char temp=s1[i]-32;
                s.insert(temp);
            }
            else
                s.insert(s1[i]);
            i++;
        }
        else{
            i++;
            j++;
        }
    }
    vector<char> v;
    for(auto it=s.begin();it!=s.end();it++)
        v.push_back(*it);
    for(int k=v.size()-1;k>=0;k--)
        cout<<v[k];
    return 0;
}
```

## 1030 完美数列

```
#include<iostream>
#include<algorithm>
using namespace std;

int main(){
    int n,p;
    cin>>n>>p;
    int arr[n];
    for(int i=0;i<n;i++)
        cin>>arr[i];
    int M=0 ,m=0;
    int count=0;
    sort(arr,arr+n);
    for(int j=0;j<n;j++)
        for(int k=j;k<n;k++){
            if(arr[k]>arr[j]*p) break;
            if(count<k-j+1) count=k-j+1;
        }
    cout<<count<<endl;
    return 0;
}
```

## 1031查验身份证

```
#include<iostream>
#include<string>
using namespace std;

int main(){
    int n;
    cin>>n;
    string arr[n];
    for(int i=0;i<n;i++)
        cin>>arr[i];
    int q[17]={7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2};
    char m[11]={'1','0','X','9','8','7','6','5','4','3','2'};
    int z[n],sum[n];
    bool flag=true;
    for(int j=0;j<n;j++) {
        sum[j]=0;
        for (int k=0;k<17;k++){
            sum[j]+=(arr[j][k]-'0')*q[k] ;
        }
        z[j]=sum[j]%11;
        if(m[z[j]]!=arr[j][17]){
            flag=false;
            cout<<arr[j]<<endl;
        }
    }
    if(flag==true)
        cout<<"All passed"<<endl;
    return 0;
}
```

## 1032挖掘机技术哪家强

```
#include<iostream>
using namespace std;

int main(){
    int n;
    cin>>n;
    int temp=n;
    int hash[n+1];
    for(int i=0;i<n+1;i++)
        hash[i]=0;
    while(n--){
        int a,b;
        cin>>a>>b;
        hash[a]+=b;
    }
    int max=0,maxi=0;
    for(int j=1;j<temp+1;j++)
        if(hash[j]>max){
            max=hash[j];
            maxi=j;
        }
    cout<<maxi<<' '<<max<<endl;
    return 0;
}
```

## 1033 旧键盘打字

```
#include<iostream>
#include<string>
#include<cctype>
#include<vector>
using namespace std;

int main(){
    string s1,s2;
    cin>>s1>>s2;
    string copys2_lower,copys2_upper;
    for(int i=0;i<s2.size();i++){
        copys2_lower[i]=tolower(s2[i]);
        copys2_upper[i]=toupper(s2[i]);
    }
    bool flag=false;
    for(int j=0;j<s1.size();j++)
        if (s1[j]==','||s1[j]=='.'||s1[j]=='-'||s1[j]=='+'){
            flag=true;
            break;
        }
    vector<int> v;
        for(int k=0;k<s2.size();k++){
            bool flag2=true;
            for(int l=0;l<s1.size();l++){
                if(copys2_upper[k]==s1[l]){
                    flag2=false;
                    break;
                }
            }
            if(flag2==true)
                v.push_back(k);
        }
        for(int m=0;m<v.size();m++){
            if (flag)
                cout<<copys2_lower[v[m]];
            else
                cout<<s2[v[m]];
        }
    return  0;
}
```

## 1034 有理数四则运算(放弃)
## 1035 插入与归并(放弃)
## 1036 跟奥巴马一起编程

```
#include<iostream>
#include<cmath>
using namespace std;

int main(){
    float n;
    char c;
    cin>>n>>c;
    int height=round(n/2);
    for(int i=0;i<n;i++)
        cout<<c;
    cout<<endl;
    for(int j=0;j<height-2;j++){
        cout<<c;
        for(int k=0;k<n-2;k++)
            cout<<' ';
        cout<<c<<endl;
    }
    for(int l=0;l<n;l++)
        cout<<c;
    cout<<endl;
    return  0;
}
```

## 1037 在霍格沃茨找零钱

```
#include<iostream>
#include<string>
#include<cmath>
using namespace std;

int main(){
    int arr1[3],arr2[3];
    char c;
    cin>>arr1[0]>>c>>arr1[1]>>c>>arr1[2]>>arr2[0]>>c>>arr2[1]>>c>>arr2[2];
    int sum1=arr1[0]*29*17+arr1[1]*29+arr1[2];
    int sum2=arr2[0]*29*17+arr2[1]*29+arr2[2];
    if(sum2<sum1)
        cout<<'-';
    int G=abs(sum2-sum1)/(29*17);
    int S=(abs(sum2-sum1)-29*17*G)/29;
    int K=abs(sum2-sum1)%29;
    cout<<G<<'.'<<S<<'.'<<K<<endl;

    return  0;
}
```

## 1038 统计同成绩学生

```
#include<iostream>
using namespace std;

int main(){
    int n;
    cin>>n;
    int arr[n];
    int hash[101]={0};
    for(int i=0;i<n;i++){
        cin>>arr[i];
        hash[arr[i]]++;
    }
    int k;
    cin>>k;
    int arr2[k];
    for(int j=0;j<k;j++)
        cin>>arr2[j];
    for(int l=0;l<k;l++){
        cout<<hash[arr2[l]];
        if(l!=k-1)
            cout<<' ';
    }
    cout<<endl;

    return  0;
}
```

## 1039 到底买不买

```
#include<iostream>
#include<algorithm>
using namespace std;

int main(){
    string s1,s2;
    cin>>s1>>s2;
    char arr1[s1.size()];
    char arr2[s2.size()];
    for(int i=0;i<s1.size();i++)
        arr1[i]=s1[i];
    for(int j=0;j<s2.size();j++)
        arr2[j]=s2[j];
    sort(arr1,arr1+s1.size());
    sort(arr2,arr2+s2.size());
    int m=0,n=0;
    int count=0;
    while(m<s1.size()) {
        if(arr1[m]==arr2[n]) {
            m++;
            n++;
            count++;
        }else if(arr1[m]>arr2[n]){
            n++;
        }else{
            m++;
        }
    }
    if(count==s2.size()){
        cout<<"Yes"<<' '<<s1.size()-s2.size()<<endl;
    }
    else{
        cout<<"No"<<' '<<s2.size()-count<<endl;
    }
    return  0;
}
```

## 1040 有几个PAT

```
#include <iostream>
#include <string>
using namespace std;
int main() {
    string s;
    cin >> s;
    long len = s.size(), result = 0, countp = 0, countt = 0;
    for (int i = 0; i < len; i++) {
        if (s[i] == 'T')
            countt++;
    }
    for (int i = 0; i < len; i++) {
        if (s[i] == 'P') countp++;
        if (s[i] == 'T') countt--;
        if (s[i] == 'A') result = (result + (countp * countt) % 1000000007) % 1000000007;
    }
    cout << result;
    return 0;
}
```

## 1041 考试座位号

```
#include <iostream>
#include <string>
using namespace std;

int main() {
    int n;
    cin>>n;
    string arr1[n];
    int arr2[n],arr3[n];
    for(int j=0;j<n;j++)
        cin>>arr1[j]>>arr2[j]>>arr3[j];
    int m;
    cin>>m;
    while(m--){
        int temp;
        cin>>temp;
        for(int i=0;i<n;i++){
            if(arr2[i]==temp){
                cout<<arr1[i]<<' '<<arr3[i]<<endl;
            }
        }
    }
    return 0;

}
```

## 1042 字符统计

```
#include<iostream>
#include<string>
#include<cctype>
using namespace std;

int main() {
    string s;
    getline(cin,s);
    for(int i=0;i<s.size();i++)
        s[i]=tolower(s[i]);
    int hashtable[256]={0};
    for(int j=0;j<s.size();j++)
        hashtable[s[j]]++;
    int max=0,maxi=0;
    for(int k=0;k<256;k++)
        if ((max<hashtable[s[k]]&&s[k]>='a'&&s[k]<='z')||(max==hashtable[s[k]]&&s[k]< s[maxi])){
            max=hashtable[s[k]];
            maxi=k;
        }
    cout<<s[maxi]<<' '<<hashtable[s[maxi]]<<endl;
    return 0;

}
```

## 1043 输出PATest

```
#include<iostream>
#include<string>
using namespace std;

int main() {
    string s;
    cin>>s;
    int arr[6]={0};
    for(int i=0;i<s.size();i++){
        if(s[i]=='P') arr[0]++;
        if(s[i]=='A') arr[1]++;
        if(s[i]=='T') arr[2]++;
        if(s[i]=='e') arr[3]++;
        if(s[i]=='s') arr[4]++;
        if(s[i]=='t') arr[5]++;
    }
    while(arr[0]||arr[1]||arr[2]||arr[3]||arr[4]||arr[5]){
        if(arr[0]) {cout<<'P'; arr[0]--;}
        if(arr[1]) {cout<<'A'; arr[1]--;}
        if(arr[2]) {cout<<'T'; arr[2]--;}
        if(arr[3]) {cout<<'e'; arr[3]--;}
        if(arr[4]) {cout<<'s'; arr[4]--;}
        if(arr[5]) {cout<<'t'; arr[5]--;}
    }
    return 0;
}
```

## 1044 火星数字

```
#include<iostream>
#include<string>
using namespace std;

bool isInt(string s){
    for(int i=0;i<s.size();i++){
        if(s[i]<'0'||s[i]>'9'){
            return false;
        }
    }
    return true;
}

int main() {
    int n;
    cin>>n;
    getchar();
    string arr1[13]={"tret","jan","feb","mar","apr","may","jun","jly","aug","sep","oct","nov","dec"};
    string arr2[12]={"tam","hel","maa","huh","tou","kes","hei","elo","syy","lok","mer","jou"};
    string s[n];
    int num=0;
    for(int i=0;i<n;i++)
        getline(cin,s[i]);
    for(int j=0;j<n;j++){
        if(isInt(s[j])){
            if(s[j].size()==1) num=s[j][0]-'0';
            if(s[j].size()==2) num=(s[j][0]-'0')*10+s[j][1]-'0';
            if(s[j].size()==3) num=100+(s[j][1]-'0')*10+s[j][2]-'0';
            if(num<=12)
                cout<<arr1[num]<<endl;
            else
                cout<<arr2[num/13-1]<<' '<<arr1[num%13]<<endl;
        }
        else{
            int sum=0;
            if(s[j]=="tret") cout<<0<<endl;
            else if(s[j]=="tam") cout<<13<<endl;
            else if(s[j].size()==3){
                for(int k=0;k<13;k++){
                    if(s[j]==arr1[k]){
                        cout<<k<<endl;
                        break;
                    }
                }
            }else{
                for(int m=0;m<12;m++)
                    if(s[j].substr(0,3)==arr2[m]){
                        sum+=(m+1)*13;
                        break;
                    }
                for(int n=0;n<13;n++)
                    if(s[j].substr(4,7)==arr1[n]){
                        sum+=n;
                        break;
                    }
                cout<<sum<<endl;
            }
        }
    }
    return 0;
}
```

## 1045 快速排序

```
#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

int main() {
    int n;
    cin>>n;
    int arr[n];
    for(int m=0;m<n;m++)
        cin>>arr[m];
    int count=0;
    vector<int> v;
    for(int i=0;i<n;i++){
        bool flag=true;
        for(int j=0;j<i;j++)
            if(arr[j]>arr[i]){
                flag=false;
                break;
            }

        for(int k=i+1;k<n;k++)
            if(arr[k]<arr[i]){
                flag=false;
                break;
            }
        if(flag){
            v.push_back(arr[i]);
            count++;
        }
    }
    cout<<count<<endl;
    sort(v.begin(),v.end());
    for(int l=0;l<v.size();l++){
        cout<<v[l];
        if(l<v.size()-1)
            cout<<' ';
    }

    return 0;
}
```

## 1046 划拳

```
#include<iostream>
using namespace std;

int main() {
    int n;
    cin>>n;
    int arr[4];
    int count1=0;
    int count2=0;
    while(n--){
        for(int i=0;i<4;i++)
            cin>>arr[i];
        if(arr[0]+arr[2]==arr[1]&&arr[0]+arr[2]!=arr[3]) count2++;
        if(arr[0]+arr[2]!=arr[1]&&arr[0]+arr[2]==arr[3]) count1++;
    }
    cout<<count1<<' '<<count2<<endl;
    return 0;
}
```

## 1047 编程团体赛

```
#include<iostream>
using namespace std;

int main() {
    int n;
    cin>>n;
    int a,b,c;
    char s;
    int score=0;
    int num;
    int hashtable[1000]={0};
    while(n--){
        cin>>a>>s>>b;
        cin>>c;
        hashtable[a]+=c;
    }
    for(int i=1;i<1000;i++)
        if(score<hashtable[i]){
            score=hashtable[i];
            num=i;
        }
    cout<<num<<' '<<score<<endl;
    return 0;
}
```

## 1048 数字加密

```
#include<iostream>
#include<string>
#include<algorithm>
#include<vector>
using namespace std;

int main() {
    string s1,s2;
    cin>>s1>>s2;
    reverse(s1.begin(),s1.end());
    reverse(s2.begin(),s2.end());
    int num;
    if(s1.size()<s2.size()){
        int temp=s2.size()-s1.size();
        for(int a=0;a<temp;a++)
            s1.insert(s1.size(),"0");
    }
    vector<char> v;
    for(int i=0;i<s2.size();i++){
        if(i%2==0){
            num=(s1[i]-'0'+s2[i]-'0')%13;
            if(num==10) v.push_back('J');
            else if(num==11) v.push_back('Q');
            else if(num==12) v.push_back('K');
            else v.push_back(num+'0');
        }
        else{
            num=s2[i]-s1[i];
            if(num<0) num+=10;
            v.push_back(num+'0');
        }
    }
    reverse(v.begin(),v.end());
    for(int j=0;j<v.size();j++){
        cout<<v[j];
    }
    return 0;
}
```

## 1049 数列的片段和

```
#include<iostream>
#include<iomanip>
using namespace std;

int main() {
    int n;
    cin>>n;
    float arr[n];
    for(int i=0;i<n;i++)
        cin>>arr[i];
    float sum=0;
    for(int j=0;j<n;j++)
        sum+=arr[j]*(n-j)*(j+1);
    cout<<fixed<<setprecision(2)<<sum<<endl;
    return 0;
}
```

## 1050 螺旋矩阵

```
#include<iostream>
#include<algorithm>
#include<cmath>
using namespace std;

bool cmp(int a,int b){
    return a>b;
}

int main() {
    int N;
    cin>>N;
    int arr[N];
    for(int i=0;i<N;i++)
        cin>>arr[i];
    sort(arr,arr+N,cmp);
    int n=0;
    for(int j=ceil(sqrt(N));j<=N;j++)
        if(N%j==0){
            n=N/j;
            break;
        }
    for(int k=0;k<N;k++){
        if((k+1)%n==0){
            cout<<arr[k]<<endl;
        }
        else {
            cout<<arr[k]<<' ';
        }
    }
    return 0;
}
```


## 1051 复数乘法

```
#include<iostream>
#include<iomanip>
#include<cmath>
using namespace std;

int main() {
    float r1,p1,r2,p2;
    cin>>r1>>p1>>r2>>p2;
    cout<<fixed<<setprecision(2)<<r1*r2*(cos(p1)*cos(p2)-sin(p1)*sin(p2))<<'-';
    float b=r1*r2*(cos(p1)*sin(p2)+cos(p2)*sin(p1));
    if(b<0)
        cout<<fixed<<setprecision(2)<<-b<<'i'<<endl;
    else
        cout<<fixed<<setprecision(2)<<b<<'i'<<endl;
    return 0;
}
```

## 1052 卖个萌
## 1053 住房空置率
## 1054 求平均值
## 1055 集体照
## 1056 组合数的和
## 1057 数零壹
## 1058 选择题
## 1059 C语言竞赛
## 1060 爱丁顿数
## 1061 判断题
## 1062 最简分数
## 1063 计算谱半径
## 1064 朋友数
## 1065 单身狗
## 1066 图像过滤
## 1067 试密码
## 1068 万绿丛中一点红
## 1069 微博转发抽奖
##  1070 结绳
## 1071 小赌怡情
```
#include<iostream>
using namespace std;

int main(){
    int t,k;
    cin>>t>>k;
    int a[k],b[k],c[k],d[k];
    for(int i=0;i<k;i++)
        cin>>a[i]>>b[i]>>c[i]>>d[i];
    for(int j=0;j<k;j++){
        if(t==0){
            cout<<"Game Over."<<endl;
            break;
        }
        else if((a[j]>d[j]&&b[j]==0)||(a[j]<d[j]&&b[j]==1)){
            if(c[j]>t)
                cout<<"Not enough tokens.  Total = "<<t<<'.'<<endl;
            else {
                t+=c[j];
                cout<<"Win "<<c[j]<<"!  Total = "<<t<<'.'<<endl;
            }
        }else{
            if(c[j]>t)
                cout<<"Not enough tokens.  Total = "<<t<<'.'<<endl;
            else{
                t-=c[j];
                cout<<"Lose "<<c[j]<<".  Total = "<<t<<'.'<<endl;
            }
        }
    }
}
```

## 1072 开学寄语
## 1073 多选题常见计分法
## 1074 宇宙无敌加法器
## 1075 链表元素分类
## 1076 WiFi密码
## 1077 互评成绩计算
## 1078 字符串压缩与压解
## 1079 延迟的回文数
## 1080 MOOC期中成绩
## 1081 检查密码
```
#include<iostream>
#include<string>
using namespace std;

int main(){
    int n;
    cin>>n;
    string s[n];
    for(int j=0;j<n;j++)
        cin>>s[j];
    for(int k=0;k<n;k++){
        int countNum=0,countLetter=0,countPoint=0;
        for(int i=0;i<s[k].size();i++){
            if('0'<=s[k][i]&&s[k][i]<='9')
                countNum++;
            else if(('a'<=s[k][i]&&s[k][i]<='z')||('A'<=s[k][i]&&s[k][i]<='Z'))
                countLetter++;
            else if(s[k][i]=='.')
                countPoint++;
        }
        if(s[k].size()<6)
            cout<<"Your password is tai duan le."<<endl;
        else if(countNum+countLetter+countPoint<s[k].size())
            cout<<"Your password is tai duan le."<<endl;
        else if(countNum+countPoint==s[k].size())
            cout<<"Your password needs zi mu."<<endl;
        else if(countLetter+countPoint==s[k].size())
            cout<<"Your password needs shu zi."<<endl;
        else if(countNum+countLetter+countPoint==s[k].size())
            cout<<"Your password is wan mei."<<endl;

    }
    return 0;
}
```

## 1082 设计比赛
```
#include<iostream>
#include<string>
using namespace std;

int main(){
    int n;
    cin>>n;
    string s[n];
    int arr1[n],arr2[n],sum[n];
    for(int i=0;i<n;i++){
        cin>>s[i]>>arr1[i]>>arr2[i];
        sum[n]=arr1[i]*arr1[i]+arr2[i]+arr2[i];
    }
    int max=0,min=0,maxi=0,mini=0;
    for(int j=0;j<n;j++){
        if(max<sum[j]){
            max=sum[j];
            maxi=j;
        }
        if(min>sum[j]){
            min=sum[j];
            mini=j;
        }
    }
    cout<<s[mini]<<' '<<s[maxi]<<endl;
    return 0;
}
```

## 1083 是否存在相等的差
```
#include<iostream>
using namespace std;

int main(){
    int n;
    int hashtable[10000]={0};
    cin>>n;
    int arr1[n],arr2[n];
    for(int i=0;i<n;i++){
        cin>>arr1[i];
        arr2[i]=i+1-arr1[i];
        if(arr2[i]<0)
            arr2[i]=-arr2[i];
    }
    for(int j=0;j<n;j++){
        hashtable[arr2[j]]++;
    }
    for(int k=n;k>=0;k--){
        if(hashtable[k]>=2)
            cout<<k<<' '<<hashtable[k]<<endl;
    }
    return 0;
}
```

## 1084 外观数列
## 1085 PAT单位排列
## 1086 就不告诉你
```
#include<iostream>
#include<string>
using namespace std;

int main(){
    int a,b;
    cin>>a>>b;
    int c=a*b;
    string s=to_string(c);
    for(int i=s.size()-1;i>=0;i--)
        cout<<s[i];
    cout<<endl;
    return 0;
}
```

## 1087 有多少不同的值
```
#include<iostream>
using namespace std;

int main(){
    int n;
    cin>>n;
    int hashtable[20000]={0};
    for(int j=1;j<=n;j++){
        hashtable[j/2+j/3+j/5]++;
    }
    int count=0;
    for(int k=0;k<10000;k++)
        if(hashtable[k]>=1)
            count++;
    cout<<count<<endl;
    return 0;
}
```

## 1088 三人行
```
#include<iostream>
#include<cmath>
using namespace std;

string fn(int a,int b){
    if(a==b)
        return "Ping";
    else if(a>b)
        return "Cong";
    else
        return "Gai";
}

int main(){
    int m,x,y;
    cin>>m>>x>>y;
    int i,j,k;
    bool flag=false;
    for(i=99;i>=10;i--){
        j=i%10*10+i/10;
        if(abs(i-j)*1.0/x==j*1.0/y){
            flag=true;
            k=j*1.0/y;
            cout<<i<<' '<<fn(i,m)<<' '<<fn(j,m)<<' '<<fn(k,m)<<endl;
            break;
        }
    }
    if(!flag)
        cout<<"No Solution"<<endl;
    return 0;
}
```

## 1089 狼人杀-简单版
## 1090 危险品装箱
## 1091 N-自守数
```
#include<iostream>
using namespace std;

int main(){
    int m,k;
    cin>>m;
    while(m--){
        cin>>k;
        bool flag=true;
        for(int n=1;n<10;n++){
            if(((n*k*k-k)%10==0&&1<=k&&k<=9)||((n*k*k-k)%100==0&&10<=k&&k<=99)||((n*k*k-k)%1000==0&&100<=k&&k<=999)){
                flag=false;
                cout<<n<<' '<<n*k*k<<endl;
                break;
            }
        }
        if(flag)
            cout<<"No"<<endl;
    }
    return 0;
}
```

## 1092 最好吃的月饼
```
#include<iostream>
using namespace std;

int main(){
    int n,m,temp=0;
    cin>>n>>m;
    int hashtable[n];
    for(int i=0;i<n;i++)
        hashtable[i]=0;
    while(m--){
        for(int j=0;j<n;j++){
            cin>>temp;
            hashtable[j]+=temp;
        }
    }
    int max=0;
    int maxIndex=0;
    for(int k=0;k<n;k++){
        if(max<=hashtable[k]){
            max=hashtable[k];
            maxIndex=k;
        }
    }
    cout<<max<<endl;
    for(int l=0;l<n;l++){
        if(max==hashtable[l]&&maxIndex==l)
            cout<<l+1;
        else if(max==hashtable[l])
            cout<<l+1<<' ';
    }
    return 0;
}
```

## 1093 字符串A+B
```
#include<iostream>
#include<string>
using namespace std;

int main(){
    int hashtable[256]={0};
    string a,b;
    getline(cin,a);
    getline(cin,b);
    for(int i=0;i<a.size();i++){
        if(hashtable[a[i]]==0){
            hashtable[a[i]]++;
            cout<<a[i];
        }
    }
    for(int j=0;j<b.size();j++){
        if(hashtable[b[j]]==0){
            hashtable[b[j]]++;
            cout<<b[j];
        }
    }
    cout<<endl;
    return 0;
}
```

## 1094 谷歌的招聘
```
#include<iostream>
#include<string>
using namespace std;

bool isPrim(int n){
    for(int i=2;i*i<=n;i++)
        if(n%i==0)
            return false;
    return true;
}

int main(){
    int l,k;
    cin>>l>>k;
    string s;
    cin>>s;
    bool flag=false;
    for(int i=0;i<=l-k;i++){
        if(isPrim(stoi(s.substr(i,k)))){
            cout<<stoi(s.substr(i,k))<<endl;
            flag=true;
            break;
        }
    }
    if(!flag)
        cout<<404<<endl;
    return 0;
}
```

## 1095 解码PAT准考证

# 二.leetcode题解

- [题目地址](https://leetcode-cn.com/problemset/algorithms/)
  
## 1.两数之和
```
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> v;
        unordered_map<int,int> m;
        for(int i=0;i<nums.size();i++)
            m[nums[i]]=i;
        for(int j=0;j<nums.size();j++){
            if(m.count(target-nums[j])&&j!=m[target-nums[j]]){
                v.push_back(j);
                v.push_back(m[target-nums[j]]);
                break;
            }
        }
        return v;
    }
};
```

## 2.两数相加
## 3.无重复字符的最长字串
## 4.寻找两个有序数组的中位数
## 5.最长回文字串
## 6.Z字形变换
## 7.整数反转
## 8.字符串转换整数（atoi）
## 9.回文数
## 10.正则表达式匹配

# 三.算法补充
## 1.大整数相加
```
//解法一
#include<iostream>
#include<string>
using namespace std;

int main(){
    string s1,s2,s3;
    cin>>s1>>s2;
    int len1=s1.size();
    int len2=s2.size();
    int len=0;
    if(len1>len2){
        len=len1;
        for(int i=0;i<len1-len2;i++)
            s2.insert(s2.begin(),'0');
    }
    else{
        len=len2;
        for(int j=0;j<len2-len1;j++)
            s1.insert(s1.begin(),'0');
    }
    int a=0,b=0;
    for(int k=len-1;k>=0;k--){
        b=s1[k]-'0'+s2[k]-'0'+a;
        if(b<10){
            a=0;
            s3.push_back(b+'0');
        }
        else{
            a=1;
            s3.push_back(b-10+'0');
        }
    }
    if(a==1)
        s3.push_back('1');
    for(int l=s3.size()-1;l>=0;l--)
        cout<<s3[l];
    return 0;
}

//解法二
#include<iostream>
#include<cstring>
using namespace std;

int main(){
    char s1[200],s2[200],s3[200];
    cin>>s1>>s2;
    int len1=strlen(s1);
    int len2=strlen(s2);
    int len3=0;
    int len=0;
    if(len1>len2){
        len=len1;
        for(int i=0;i<len2;i++)
            s2[i+len1-len2]=s2[i];
        for(int i=0;i<len1-len2;i++)
            s2[i]='0';
    }
    else{
        len=len2;
        for(int j=0;j<len1;j++)
            s1[j+len2-len1]=s1[j];
        for(int j=0;j<len2-len1;j++)
            s1[j]='0';
    }
    int a=0,b=0;
    for(int k=len-1;k>=0;k--){
        b=s1[k]-'0'+s2[k]-'0'+a;
        if(b<10){
            a=0;
            s3[len3++]=b+'0';
        }
        else{
            a=1;
            s3[len3++]=b-10+'0';
        }
    }
    if(a==1)
        s3[len3++]='1';
    for(int l=len3-1;l>=0;l--)
        cout<<s3[l];
    return 0;
}
```

## 2.调整方阵
```
#include<iostream>
using namespace std;

int main(){
    int n;
    cin>>n;
    int arr[n][n];
    int max=0,maxi=0;
    for(int i=0;i<n;i++)
        for(int j=0;j<n;j++)
            cin>>arr[i][j];

    for(int k=0;k<n;k++){
        max=0;
        for(int l=k;l<n;l++){
            if(arr[l][k]>max){
                max=arr[l][k];
                maxi=l;
            }
        }
        if(maxi!=k){
            for(int m=0;m<n;m++){
                int temp=arr[k][m];
                arr[k][m]=arr[maxi][m];
                arr[maxi][m]=temp;
            }
        }
    }
    for(int i=0;i<n;i++) {
        for(int j=0;j<n;j++){
            if(j<n-1)
                cout<<arr[i][j]<<' ';
            else
                cout<<arr[i][j]<<endl;
        }
    }
    return 0;
}
```

## 3.杨辉三角
```
#include<iostream>
using namespace std;

int main(){
    int n;
    cin>>n;
    int arr[n][n];
    for(int i=0;i<n;i++){
        for(int  j=0;j<n;j++){
            arr[i][j]=0;
        }
    }
    for(int m=0;m<n;m++){
        for(int l=0;l<n;l++){
            if(l==0)
                arr[m][l]=1;
            else if(m==0)
                break;
            else
                arr[m][l]=arr[m-1][l]+arr[m-1][l-1];
        }
    }
    for(int i=0;i<n;i++){
        for(int  j=0;j<n;j++){
            if(arr[i][j])
                cout<<arr[i][j]<<' ';
        }
        cout<<endl;
    }
}
```

## 4.n个数组成最大数
```
#include<iostream>
#include<string>
using namespace std;

bool cmp(string a,string b){
    return a+b>b+a;
}

int main(){
    int n;
    cin>>n;
    string arr[n];
    for(int i=0;i<n;i++)
        cin>>arr[i];
    sort(arr,arr+n,cmp);
    for(int j=0;j<n;j++)
        cout<<arr[j];
    cout<<endl;
    return 0;

}
```

## 5.走楼梯
```
//解法一
#include<iostream>
using namespace std;

int fn(int n){
    if(n==1) return 1;
    else if(n==2) return 2;
    else if(n==3) return 4;
    else{
        return fn(n-1)+fn(n-2)+fn(n-3);
    }
}

int main(){
    int n;
    cin>>n;
    cout<<fn(n)<<endl;
    return 0;

}

//解法二
#include<iostream>
#include<vector>
using namespace std;

int main(){
    int n;
    cin>>n;
    vector<int> v;
    v.push_back(1);
    v.push_back(2);
    v.push_back(4);
    for(int i=3;i<n;i++){
        v.push_back(v[i-1]+v[i-2]+v[i-3]);
    }
    cout<<v[n-1]<<endl;
    return 0;
}

//拓展：存在坏阶梯
#include<iostream>
using namespace std;

int fn(int n,int arr[],int k){
    bool flag=false,flag1=false,flag2=false;
    for(int i=0;i<k;i++){
        if(n==arr[i])
            flag=true;
        if(arr[i]==1)
            flag1=true;
        if(arr[i]==2)
            flag2=true;
    }
    if(flag)
        return 0;
    else{
        if(flag1&&flag2){
            if(n==3)
                return 1;
        }
        else if(flag1&&!flag2){
            if(n==2)
                return 1;
            else if(n==3)
                return 2;
        }
        else if(!flag1&&flag2){
            if(n==1)
                return 1;
            else if(n==3)
                return 2;
        }
        else{
            if(n==1)
                return 1;
            else if(n==2)
                return 2;
            else if(n==3)
                return 4;
        }
        if(n>3)
            return fn(n-1,arr,k)+fn(n-2,arr,k)+fn(n-3,arr,k);
    }
}

int main(){
    int n,k;
    cin>>n>>k;
    int arr[k];
    for(int i=0;i<k;i++)
        cin>>arr[i];
    cout<<fn(n,arr,k)<<endl;
    return 0;
}
```